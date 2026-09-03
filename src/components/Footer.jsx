 import {Link} from "react-router-dom";
 import { socialLinks } from "../constants";

 const Footer = () => {
   return (
     <footer className='footer font-poppins'>
       <hr className='border-slate-200' />

       <div className='footer-container'>
         <p>
           © 2026 <strong>Chirag Garg</strong>. All rights reserved.
         </p>        

            <div className='flex gap-3 justify-center items-center'>    
               {socialLinks.map((link) => (
                 <Link key={link.name} to={link.url} target='_blank' rel='noopener noreferrer' className='text-lg hover:text-blue-500'>
                   {link.icon}
                 </Link>
               ))}
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;