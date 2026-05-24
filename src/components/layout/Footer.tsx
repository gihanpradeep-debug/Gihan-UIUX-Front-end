import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  

  return (
    <footer className="py-12 glass mt-16 ">
   
          
       
        <div className="mt-8 pt-8  text-center text-sm text-foreground/60">
          <p>© {currentYear} Gihan. All rights reserved.</p>
        </div>
      
    </footer>
  );
};

export default Footer;