import { useState } from "react";
import Hero from "./faq/Hero";
import SearchBar from "./faq/SearchBar";
import FAQItem from "./faq/FAQItem";
import faqData from "../data/faqData";

const Faq = () => {
  const [search, setSearch] = useState("");

  const [openId, setOpenId] = useState(null);

  const filteredFaq = faqData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', backgroundColor: '#0f172a' }}>
      <Hero />
      
      {/* Passando o estado e a função modificadora como props */}
      <SearchBar search={search} setSearch={setSearch} />
      
      <div className="faq-list" style={{ maxWidth: '1600px', margin: '0 auto', padding: '20px' }}>
        {filteredFaq.map((item, index) => (
          <FAQItem 
            key={index}
            item={item} 
            isOpen={openId === index}
            onToggle={() => handleToggle(index)}    
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;