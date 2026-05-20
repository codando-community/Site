import "../../styles/faq.css";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <div 
        className="faq-question" 
        onClick={onToggle} 
        style={{ cursor: "pointer" }}
      >
        <h3>{item.question}</h3>
        <span className={`faq-icon ${isOpen ? "open" : ""}`}></span>
      </div>
      
      {isOpen && (
        <div className="faq-answer">
          <div 
            className="answer-text"
            dangerouslySetInnerHTML={{ __html: item.answer }} 
          />

          {item.images && item.images.length > 0 && (
            <div className="faq-images">
              {item.images.map((imgUrl, idx) => (
                <img 
                  key={idx} 
                  src={imgUrl.startsWith('http') ? imgUrl : `/${imgUrl.replace(/^\/+/, '')}`} 
                  alt={`Ilustração FAQ ${idx}`} 
                  className="faq-image" 
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FAQItem;