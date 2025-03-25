import React, { useState } from "react";
import { Send } from "lucide-react";
const SearchBox = () => {
    const [search, setSearch] = useState("");
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );}

export default Chatbot;
