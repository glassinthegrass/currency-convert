const axios = require("axios");
module.exports = {
  getRates: async (req, res) => {
    //alowing for a null value to be sent without the need of a default on front end
    const from = req.query?.from === "" ? "USD" : req.query?.from;
    try {
      //get denomination with corresponding rates
      let denomination = await axios
        .get(`https://api.frankfurter.app/latest?from=${from}`)
        .then((res) => res.data);

        //get currency symbols and full names
      let currency = await axios
        .get("https://api.frankfurter.app/currencies")
        .then((res) => res.data);

      const { rates } = denomination;
      rates[denomination.base] = 1.0;
      let rateArr = [];
      for (let symbol in rates) {
        rateArr.push({
          denomination: currency[symbol],
          symbol,
          rate: rates[symbol],
        });
      }
      let z = rateArr.findIndex((a) => a.symbol === denomination.base);
      rateArr.splice(z, 1);

      let finalArr = [
        { denomination: currency[from], symbol: denomination.base, rate: 1 },
        ...rateArr,
      ];
      return res.status(200).send(finalArr);
    } catch (err) {
      return res.status(404).send("please refresh the page");
    }
  },
};
