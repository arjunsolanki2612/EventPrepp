import React from 'react';
import footerItems from '../atoms/FooterItem';
import '@fortawesome/fontawesome-free/css/all.min.css';

const linkStyle = {
  textDecoration: 'none',
  color: '#6c757d', // Default color
  transition: 'color 0.3s ease',
};

const hoverStyle = {
  color: '#007bff', // Hover color
};

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-white">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {footerItems.map((item, index) => (
              <div className="col-span-1" key={index}>
                {item.type === 'social' && (
                  <>
                    <img src={item.image} alt="" width="180" className="mb-3" />
                    <p className="font-italic text-gray-500">{item.description}</p>
                    <ul className="flex space-x-4 mt-4">
                      {item.platforms.map(platform => (
                        <li key={platform}>
                          <a
                            href={`https://www.${platform}.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={platform}
                            style={linkStyle}
                            onMouseEnter={e => (e.currentTarget.style.color = hoverStyle.color)}
                            onMouseLeave={e => (e.currentTarget.style.color = linkStyle.color)}
                          >
                            <i className={`fab fa-${platform}`}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {item.type === 'product' && (
                  <>
                    <h6 className="text-uppercase font-bold mb-4">Product</h6>
                    <ul className="list-none mb-0">
                      {item.links.map(link => (
                        <li className="mb-2" key={link}>
                          <a
                            href={`https://www.${link}.com`}
                            style={linkStyle}
                            onMouseEnter={e => (e.currentTarget.style.color = hoverStyle.color)}
                            onMouseLeave={e => (e.currentTarget.style.color = linkStyle.color)}
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {item.type === 'company' && (
                  <>
                    <h6 className="text-uppercase font-bold mb-4">Company</h6>
                    <ul className="list-none mb-0">
                      {item.links.map(link => (
                        <li className="mb-2" key={link}>
                          <a
                            href={`https://www.${link}.com`}
                            style={linkStyle}
                            onMouseEnter={e => (e.currentTarget.style.color = hoverStyle.color)}
                            onMouseLeave={e => (e.currentTarget.style.color = linkStyle.color)}
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {item.type === 'newsletter' && (
                  <>
                    <h6 className="text-uppercase font-bold mb-4">Newsletter</h6>
                    <p className="text-gray-500 mb-4">{item.description}</p>
                    <div className="p-1 rounded border">
                      <div className="flex">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          aria-describedby="button-addon1"
                          className="form-input border-0 shadow-0 p-2 flex-grow"
                        />
                        <button id="button-addon1" type="submit" className="btn btn-link p-2">
                          <i className="fa fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;