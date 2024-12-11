'use client'
import localFont from "next/font/local";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getDictionary } from "../componentes/diccionario";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  let [idioma, setIdioma] = useState('en');
  let dict = getDictionary(idioma);

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang={idioma}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="/pokemon">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="/pokemon">Inicio</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pokemon Generación</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/Pokemongen1">Generación 1</a></li>
                      <li><a className="dropdown-item" href="/Pokemongen2">Generación 2</a></li>
                      <li><a className="dropdown-item" href="/Pokemongen3">Generación 3</a></li>
                    </ul>
                  </li>
                </ul>
                <div>
                  <button onClick={() => setIdioma('es')} className="btn btn-light me-2">
                    <Image src="/spain.png" alt="Español" width={24} height={24} />
                  </button>
                  <button onClick={() => setIdioma('en')} className="btn btn-light">
                    <Image src="/uk.png" alt="English" width={24} height={24} />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <h1>{dict.title}</h1>
        <h2>{dict.description}</h2>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}