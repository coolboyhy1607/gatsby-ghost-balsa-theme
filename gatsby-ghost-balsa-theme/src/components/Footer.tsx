import React from "react";
import { SettingsAndSlugs } from "../models/settings-and-page-slugs.model";
import { Link } from "gatsby";
import facebookLogo from "../images/facebook.svg";
import twitterLogo from "../images/twitter.svg";
import instagramLogo from "./../images/instagram.svg";
import linkedinLogo from "./../images/linkedin.svg";
import githubLogo from "./../images/github.svg";

type FooterProps = {
  footerData: SettingsAndSlugs;
};

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteUrl, footer, apiUrl, socialLinks },
    },
  } = footerData;

  return (
    <footer className="bg-gray-100">
      <div className="flex flex-wrap items-center py-4 px-4 border-b container mx-auto">
        <div className="w-full lg:w-1/5 text-center lg:text-left">
          <span className="block md:inline-block md:mb-0 text-primaryActive">
            {footer.copyright ? footer.copyright : siteTitle} ©{" "}
            {new Date().getFullYear()}
          </span>
        </div>
        <div className="w-full lg:w-3/5 mt-4 lg:mt-0 text-center">
          {footer.navigation.map(({ label, url }, i) => {
            return url.startsWith("/") ||
              url.startsWith(siteUrl) ||
              url.startsWith(apiUrl) ? (
              <Link
                key={i}
                className="inline-block my-2 mx-4 lg:mx-5 text-body border-b-3 border-transparent hover:border-b-3 hover:border-primary"
                to={`${
                  url.startsWith("/")
                    ? url
                    : url.startsWith(siteUrl)
                    ? url.slice(siteUrl.length, url.length)
                    : url.slice(apiUrl.length, url.length)
                }`}
              >
                {label}
              </Link>
            ) : (
              <a
                key={i}
                href={url}
                rel="noreferrer noopener"
                target="_blank"
                className="inline-block my-2 mx-4 lg:mx-5 text-body border-b-3 border-transparent hover:border-b-3 hover:border-primary"
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* social Icons */}
        <div className="flex flex-wrap justify-center items-center lg:justify-end w-full lg:w-1/5 my-2 lg:my-0 mt-4 lg:mt-0">
          {socialLinks && socialLinks.facebook && (
            <a
              rel="noreferrer noopener"
              href={`${socialLinks.facebook}`}
              target="_blank"
            >
              <img
                className="w-5 h-5 mx-2 my-2"
                src={facebookLogo}
                alt="Facebook Logo"
              />
            </a>
          )}

          {socialLinks && socialLinks.twitter && (
            <a
              rel="noreferrer noopener"
              href={`${socialLinks.twitter}`}
              target="_blank"
            >
              <img
                className="w-5 h-5 mx-2 my-2"
                src={twitterLogo}
                alt="Twitter Logo"
              />
            </a>
          )}

          {socialLinks && socialLinks.instagram && (
            <a
              rel="noreferrer noopener"
              href={`${socialLinks.instagram}`}
              target="_blank"
            >
              <img
                className="w-5 h-5 mx-2 my-2"
                src={instagramLogo}
                alt="Instagram Logo"
              />
            </a>
          )}

          {socialLinks && socialLinks.linkedin && (
            <a
              rel="noreferrer noopener"
              href={`${socialLinks.linkedin}`}
              target="_blank"
            >
              <img
                className="w-5 h-5 mx-2 my-2"
                src={linkedinLogo}
                alt="LinkedIn Logo"
              />
            </a>
          )}

          {socialLinks && socialLinks.github && (
            <a
              rel="noreferrer noopener"
              href={`${socialLinks.github}`}
              target="_blank"
            >
              <img
                className="w-5 h-5 mx-2 my-2"
                src={githubLogo}
                alt="LinkedIn Logo"
              />
            </a>
          )}
        </div>
      </div>
      <div className="py-4 flex flex-col items-center justify-center">
        <a
          className="text-primary hover:text-primaryActive uppercase"
          href="https://draftbox.co?ref=preview"
          rel="noreferrer noopener"
          target="_blank"
        >
          Published with DraftBox
        </a>
      </div>
    </footer>
  );
};

export default Footer;
