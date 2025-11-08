import React, { useState, useEffect } from "react";
import mqtt from "mqtt";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

const MQTTComponentLpLtGGr10 = () => {
  const [message, setMessage] = useState(null);
  const [client, setClient] = useState(null);
  const mqttPublish = (context) => {
    if (client) {
      const { topic, qos, payload } = context;
      client.publish(topic, payload, { qos }, (error) => {
        if (error) {
          console.log("Publish error: ", error);
        }
      });
    }
  };
  const turnOff = () => {
    const context = {
      topic: "IOT_lantaiG_grp10_hmi_button",
      qos: 1,
      payload: '{ "value" : [ false ]}',
    };
    mqttPublish(context);
  };
  const turnOn = () => {
    const context = {
      topic: "IOT_lantaiG_grp10_hmi_button",
      qos: 1,
      payload: '{ "value" : [ true ]}',
    };
    mqttPublish(context);
  };
  useEffect(() => {
    const mqttClient = mqtt.connect("ws://broker.emqx.io:8083/mqtt");
    mqttClient.on("connect", () => {
      console.log("Connected to MQTT broker");
      // Subscribe to the topic
      mqttClient.subscribe("IOT_lantaiG_grp10_hmi_button", (err) => {
        if (!err) {
          console.log("Subscribed to topic");
        }
      });
    });
    mqttClient.on("message", (topic, message) => {
      // Handle incoming messages
      const jsonObject = JSON.parse(message);
      const valueV = jsonObject.value[0];
      console.log(valueV);
      setMessage(valueV.toString());
    });
    setClient(mqttClient);
    // Clean up the connection on unmount
    return () => {
      if (mqttClient) {
        mqttClient.end();
      }
    };
  }, []);

  return (
    <div>
      {message === "true" ? (
        <MDBox ml={-1}>
          <button onClick={turnOff}>Turn Off</button>
        </MDBox>
      ) : (
        <MDBox ml={-1}>
          <button onClick={turnOn}>Turn On</button>
        </MDBox>
      )}
    </div>
  );
};
export default MQTTComponentLpLtGGr10;
