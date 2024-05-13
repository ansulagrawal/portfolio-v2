import Image from 'next/image';
import Link from 'next/link';

import { footer } from '@/config/global';

function Footer() {
  return (
    <footer className="flex flex-col border-t border-fun-pink-darker z-5 py-10">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.colums.map(f => (
          <div key={f.title} className="text-left mb-5 sm:mb-0">
            <h4 className="uppercase text-fun-gray text-sm font-bold">{f.title}</h4>
            {f.links.map(({ leavesWebsite, link, icon, name }) => (
              <div key={name} className="my-4">
                {leavesWebsite ? (
                  <a href={link} target="_blank" className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
                    {icon && (
                      <span className="pr-2 -mb-1">
                        <Image src={icon} width={20} height={20} alt={name} />
                      </span>
                    )}
                    {name}
                  </a>
                ) : (
                  <Link href={link} className="opacity-70 hover:opacity-100 transition-opacity">
                    {name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold">Support My Work</h4>

          <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
            {footer.support.buymeacoffee !== '' && (
              <div>
                <a href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`} target="_blank">
                  <img src="/img/buy-me-a-coffee.svg" className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity" />
                </a>
              </div>
            )}
            <p className="text-fun-gray text-xs pt-1">{footer.support.message}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
