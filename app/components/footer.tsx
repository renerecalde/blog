import { StackOverflowIcon, LinkedinIcon, GithubIcon } from './icons';


export default function Footer() {
    return (
        <footer className="mb-16">
            <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://stackoverflow.com/users/11488522/rene-recalde"
                    >
                        <StackOverflowIcon/>
                        <p className="ml-2 h-7">stackoverflow</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/renerecalde"
                    >
                        <GithubIcon/>
                        <p className="ml-2 h-7">github</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/rene-eduardo-recalde-70b610199/"
                    >
                        <LinkedinIcon/>
                        <p className="ml-2 h-7">linkedin</p>
                    </a>
                </li>
            </ul>
            <p className="mt-8 text-neutral-600 dark:text-neutral-300">
                © {new Date().getFullYear()} renerecalde Licensed
            </p>
        </footer>
    )
}
