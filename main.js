const cron = require("node-cron");
const fs = require("fs");
const parseOvpnLog = require("./parser").parseOvpnLog;
const utils = require("./utils");

const main = () => {
  var ovpnp = parseOvpnLog("/var/log/openvpn/status.log");

  console.log(ovpnp.last_updated);
  const fileName = `../csv/${new Date().toISOString()}.csv`;

  fs.writeFile(fileName, utils.convertToCSV(ovpnp.client_list), "utf8", err => {
    if (err) {
      console.log(
        "Some error occured - file either not saved or corrupted file saved."
      );
    } else {
      console.log("successfully");
    }
  });
};

cron.schedule("0 11 * * *", () => {
  main();
});

main();
