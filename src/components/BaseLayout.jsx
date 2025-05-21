import Header from "./Header";

const BaseLayout = ({ children }) => {
    return (
        <>
        <Header />
        <div style={{paddingTop: '60px'}}>
            {children}
        </div>
        
        </>
    );
};

export default BaseLayout;