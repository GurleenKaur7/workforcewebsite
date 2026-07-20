"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../components/styles/main.css";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Jobs", path: "/jobs" },
  { name: "WOW", path: "/wow" },
  { name: "Contact", path: "/Contacts" },
];

export default function Header() {

   const pathname = usePathname();
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      
      {/* Logo */}
      <Link
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <Image
          src="/images/logo.png"   
          alt="Logo"
          width={100}
          height={80}
          style={{ marginLeft: "60px" }}
          className="me-2"
        />
      </Link>

      {/* Navigation */}
       <ul className="nav nav-pills">
        {navItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link
              href={item.path}
              className={`nav-link ${
                pathname === item.path ? "active" : ""
              }`}
              style={{
                color: pathname === item.path ? "#ff4da6" : "",
                textDecoration:
                  pathname === item.path ? "underline" : "none",
                background: "none",
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>


      {/* Button Image */}

      <Link href="/signup">
      <button type="button" className="btn btn-primary p-0">
        <Image
          src="/images/button.png"  // also must be inside public folder
          alt="Sign-up"
          width={80}
          height={50}
        />
      </button>
      </Link>
    </header>
  );
}




