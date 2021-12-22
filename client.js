const GRPCClient = require("node-grpc-client");
const path = require("path");

const PROTO_PATH = path.resolve(__dirname, "chat.proto");

const client = new GRPCClient(
  PROTO_PATH,
  "chat",
  "ChatService",
  "localhost:9000"
);

const message = {
  body: "",
};

const details = {
  name: "Uchenna",
  age: 27,
};

const options = {
  metadata: {
    hello: "world",
  },
};

client.runService(
  "SayHello",
  message,
  (err, res) => {
    if (err) {
      console.log("Error:", err);
      return;
    }
    console.log("Hello Response:", res);
  },
  options
);

client.runService("GetDetails", details, (err, res) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log("Details Response:", res);
});
