import axios from "axios";
import config from "../config.js";

export const fetchData = async (req, res) => {
  try {
    const { category, limit } = req.query;
    let apiUrl = config.apiBaseUrl;
    // const apiUrl = `${config.apiBaseUrl}?category=${category}&limit=${limit}`;
    const response = await axios.get(apiUrl);
    let data = response.data.entries;

    // Filter by category if provided
    if (category) {
      data = data.filter(
        (item) => item.Category.toLowerCase() === category.toLowerCase()
      );
    }

    // Apply limit if provided
    if (limit) {
      const limitt = parseInt(limit);
      data = data.slice(0, limitt);
    }
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "No data found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const filterData = async (req, res) => {
  try {
    const { category, limit } = req.query;
    let apiUrl = config.apiBaseUrl;
    // const apiUrl = `${config.apiBaseUrl}?category=${category}&limit=${limit}`;
    const response = await axios.get(apiUrl);
    let data = response.data.entries;

    // Filter by category if provided
    if (category) {
      data = data.filter(
        (item) => item.Category.toLowerCase() === category.toLowerCase()
      );
    }

    // Apply limit if provided
    if (limit) {
      const limitt = parseInt(limit);
      data = data.slice(0, limitt);
    }
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "No data found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
