import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = ["Services", "About", "Team", "Contact"];

    return (
        <>
            <header
                className={cn(
                    "fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-[95%] md:max-w-7xl z-50 transition-all duration-300 rounded-full px-6 py-4 flex items-center justify-between",
                    isScrolled
                        ? "bg-black/80 backdrop-blur-xl border border-primary/10 py-3"
                        : "bg-transparent border border-transparent"
                )}
            >
                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-1 group text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
                >
                    Electric<span className="text-accent-cyan">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-medium text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all duration-300 block scale-100 hover:scale-105"
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center">
                    <button
                        className={cn(
                            "flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300",
                            isScrolled
                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "bg-background text-primary hover:bg-background/90"
                        )}
                    >
                        Get Started
                        <div className={cn("flex items-center justify-center w-8 h-8 rounded-full", isScrolled ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground")}>
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-primary p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl flex flex-col justify-center items-center px-6 py-20">
                    <nav className="flex flex-col items-center gap-6 w-full mb-10">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-2xl font-semibold text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                    <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground text-lg font-semibold w-full max-w-sm justify-center">
                        Get Started
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground text-primary">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </button>
                </div>
            )}
        </>
    );
}
