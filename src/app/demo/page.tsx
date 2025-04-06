"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuShieldCheck,
  LuEye,
  LuPlus,
  LuThumbsUp,
  LuThumbsDown,
  LuX,
  LuSave,
} from "react-icons/lu";

// Mock data for initial articles
const initialArticles = [
  {
    id: "1",
    title: "The Impact of Climate Change on Coastal Communities",
    content:
      "Recent studies have shown that rising sea levels are accelerating faster than previously predicted. Coastal communities in Southeast Asia are particularly vulnerable, with projections suggesting that over 300 million people could be displaced by 2050 if current trends continue.\n\nThis data contradicts official government reports which have consistently downplayed these impacts. According to leaked documents from the Ministry of Environmental Affairs, officials have been aware of these projections since 2018 but have deliberately withheld this information from public discourse.",
    author: "anon7H92xB",
    timestamp: "2025-02-18T14:23:00Z",
    upvotes: 42,
    downvotes: 3,
  },
  {
    id: "2",
    title: "Corporate Surveillance Practices Exposed",
    content:
      "Internal documents reveal that TechGiant Corporation has been collecting and selling user location data without explicit consent. Despite public statements to the contrary, the company's internal communication shows executives were fully aware of these practices.\n\nThe documents show that law enforcement agencies in at least 12 countries have purchased this data to track individuals without obtaining warrants, effectively circumventing constitutional protections against unreasonable searches.",
    author: "priv8zER0",
    timestamp: "2025-03-01T09:17:00Z",
    upvotes: 127,
    downvotes: 8,
  },
  {
    id: "3",
    title: "Unreported Vaccine Trial Results",
    content:
      "Complete trial data from PharmaCorp's ZV-23 vaccine shows efficacy rates significantly lower than reported in their public announcements. While the company claimed 94% efficacy in preventing transmission, the complete dataset shows only 76% efficacy with notable side effects that were not disclosed in the published study.\n\nWhile still considered safe by medical standards, the discrepancy between public claims and actual data raises serious questions about the transparency of the approval process and the company's influence over regulatory decisions.",
    author: "medLeaks47",
    timestamp: "2025-03-05T16:42:00Z",
    upvotes: 89,
    downvotes: 21,
  },
];

// Simulate Internet Identity service
const generateRandomPrincipal = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 27; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export default function DemoPage() {
  // Authentication states
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPrincipal, setCurrentPrincipal] = useState("");

  // Content states
  const [articles, setArticles] = useState(initialArticles);
  const [selectedArticle, setSelectedArticle] = useState<
    (typeof initialArticles)[0] | null
  >(null);
  const [showPostModal, setShowPostModal] = useState(false);

  // Form states
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // Handle login simulation
  const simulateLogin = () => {
    setIsLoggingIn(true);
    // Simulate network delay
    setTimeout(() => {
      const principal = generateRandomPrincipal();
      setCurrentPrincipal(principal);
      setIsAuthenticated(true);
      setIsLoggingIn(false);
      setShowLoginModal(false);
    }, 1500);
  };

  // Handle article submission
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitArticle = (e: any) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newArticle = {
      id: Date.now().toString(),
      title: newTitle,
      content: newContent,
      author: currentPrincipal.substring(0, 10),
      timestamp: new Date().toISOString(),
      upvotes: 0,
      downvotes: 0,
    };

    setArticles([newArticle, ...articles]);
    setNewTitle("");
    setNewContent("");
    setShowPostModal(false);
  };

  // Handle voting
  const handleVote = (id: string, isUpvote: boolean) => {
    setArticles(
      articles.map((article) => {
        if (article.id === id) {
          return {
            ...article,
            upvotes: isUpvote ? article.upvotes + 1 : article.upvotes,
            downvotes: !isUpvote ? article.downvotes + 1 : article.downvotes,
          };
        }
        return article;
      })
    );

    // Also update selected article if it's currently viewed
    if (selectedArticle && selectedArticle.id === id) {
      setSelectedArticle({
        ...selectedArticle,
        upvotes: isUpvote
          ? selectedArticle.upvotes + 1
          : selectedArticle.upvotes,
        downvotes: !isUpvote
          ? selectedArticle.downvotes + 1
          : selectedArticle.downvotes,
      });
    }
  };

  // Format date for display
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-[#fffdf7]">
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!isAuthenticated ? (
          <div className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl border border-[#eeeae2] p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#e6fff5] rounded-full flex items-center justify-center mb-6">
                <LuShieldCheck className="w-10 h-10 text-[#2ea58c]" />
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Welcome to EverTree Vault Demo
              </h2>

              <p className="text-[#3a3a3a] mb-6 max-w-lg">
                Experience a simulation of our decentralized,
                censorship-resistant knowledge archive built on the Internet
                Computer Protocol.
              </p>

              <button
                onClick={() => setShowLoginModal(true)}
                className="px-6 py-3 rounded-full bg-[#2ea58c] hover:bg-[#2ea58c]/90 text-white transition-colors font-medium shadow-sm"
              >
                Login with Internet Identity
              </button>

              <p className="mt-4 text-xs text-[#666] max-w-md">
                This is a simulated demo. No actual blockchain transactions
                occur, and all data exists only in your browser.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-[#eeeae2] p-6 shadow-sm sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="font-bold text-lg">Your Profile</h2>
                    <p className="text-xs font-mono text-[#3a3a3a] mt-1 bg-[#f7f3eb] px-2 py-1 rounded inline-block">
                      {currentPrincipal.substring(0, 10)}...
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[#e6fff5] flex items-center justify-center">
                    <span className="text-[#2ea58c] font-bold">
                      {currentPrincipal.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <button
                    onClick={() => setShowPostModal(true)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#2ea58c] hover:bg-[#2ea58c]/90 text-white transition-colors font-medium"
                  >
                    <LuPlus className="w-5 h-5" />
                    Post New Article
                  </button>
                </div>

                <div className="border-t border-[#eeeae2] pt-4">
                  <h3 className="font-medium text-sm mb-3">About This Demo</h3>
                  <ul className="text-xs text-[#3a3a3a] space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#e6fff5] flex-shrink-0 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2ea58c]"></div>
                      </div>
                      <span>Post articles that will be stored permanently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#e6fff5] flex-shrink-0 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2ea58c]"></div>
                      </div>
                      <span>Vote on articles to establish reputation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#e6fff5] flex-shrink-0 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2ea58c]"></div>
                      </div>
                      <span>
                        Content is anonymously attributed to your principal ID
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article List */}
            <div className="lg:col-span-2">
              <h2 className="font-bold text-xl mb-6">Vault Articles</h2>

              <div className="space-y-4">
                {articles.map((article) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl border border-[#eeeae2] p-5 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-medium mb-2">
                      {article.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs mb-4">
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 bg-[#e6fff5] rounded text-[#2ea58c] font-mono">
                          {article.author}
                        </div>
                        <span className="text-[#3a3a3a]">
                          {formatDate(article.timestamp)}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#3a3a3a] text-sm line-clamp-3 mb-4">
                      {article.content}
                    </p>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="flex items-center gap-1 text-sm text-[#2ea58c] hover:text-[#2ea58c]/80 transition-colors"
                      >
                        <LuEye className="w-4 h-4" />
                        Read more
                      </button>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleVote(article.id, true)}
                          className="flex items-center gap-1 px-2 py-1 rounded hover:bg-green-50 transition-colors text-sm"
                        >
                          <LuThumbsUp
                            className={`w-4 h-4 ${
                              article.upvotes > 0
                                ? "text-green-600"
                                : "text-[#3a3a3a]"
                            }`}
                          />
                          <span className="font-medium">{article.upvotes}</span>
                        </button>

                        <button
                          onClick={() => handleVote(article.id, false)}
                          className="flex items-center gap-1 px-2 py-1 rounded hover:bg-red-50 transition-colors text-sm"
                        >
                          <LuThumbsDown
                            className={`w-4 h-4 ${
                              article.downvotes > 0
                                ? "text-red-600"
                                : "text-[#3a3a3a]"
                            }`}
                          />
                          <span className="font-medium">
                            {article.downvotes}
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Internet Identity Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Internet Identity</h2>
                <button
                  onClick={() => !isLoggingIn && setShowLoginModal(false)}
                  className="text-[#3a3a3a] hover:text-black"
                  disabled={isLoggingIn}
                >
                  <LuX className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col items-center py-4">
                <div className="w-20 h-20 rounded-full bg-[#e6fff5] flex items-center justify-center mb-6">
                  <LuShieldCheck className="w-10 h-10 text-[#2ea58c]" />
                </div>

                {isLoggingIn ? (
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[#eeeae2] border-t-[#2ea58c] rounded-full animate-spin mb-4 mx-auto"></div>
                    <p className="text-[#3a3a3a]">Authenticating...</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-medium mb-2">
                      Authenticate with II
                    </h3>
                    <p className="text-center text-[#3a3a3a] mb-6">
                      Sign in with Internet Identity to access EverTree Vault
                      securely.
                    </p>

                    <button
                      onClick={simulateLogin}
                      className="w-full py-3 rounded-lg bg-[#2ea58c] hover:bg-[#2ea58c]/90 text-white transition-colors font-medium"
                    >
                      Authenticate
                    </button>

                    <p className="mt-4 text-xs text-[#666] text-center">
                      This is a simulated demo. No actual authentication is
                      taking place.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Post Article Modal */}
      <AnimatePresence>
        {showPostModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Post New Article</h2>
                <button
                  onClick={() => setShowPostModal(false)}
                  className="text-[#3a3a3a] hover:text-black"
                >
                  <LuX className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmitArticle} className="space-y-4">
                <div>
                  <label
                    htmlFor="article-title"
                    className="block text-sm font-medium text-[#3a3a3a] mb-1"
                  >
                    Title
                  </label>
                  <input
                    id="article-title"
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Enter article title"
                    className="w-full rounded-lg border border-[#eeeae2] p-3 focus:outline-none focus:ring-2 focus:ring-[#2ea58c] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="article-content"
                    className="block text-sm font-medium text-[#3a3a3a] mb-1"
                  >
                    Content
                  </label>
                  <textarea
                    id="article-content"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Enter article content..."
                    rows={8}
                    className="w-full rounded-lg border border-[#eeeae2] p-3 focus:outline-none focus:ring-2 focus:ring-[#2ea58c] focus:border-transparent"
                    required
                  />
                </div>

                <div className="bg-[#e6fff5] rounded-lg p-3 text-sm text-[#2ea58c]">
                  <p>
                    Your article will be stored with cryptographic protection
                    and will be attributed to your anonymous identity.
                  </p>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowPostModal(false)}
                    className="px-4 py-2 rounded-lg border border-[#eeeae2] hover:bg-[#f7f3eb] transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#2ea58c] hover:bg-[#2ea58c]/90 text-white transition-colors flex items-center gap-2"
                  >
                    <LuSave className="w-4 h-4" />
                    Submit Article
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-3xl w-full shadow-xl max-h-[90vh] overflow-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-[#3a3a3a] hover:text-black"
                >
                  <LuX className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between text-sm mb-6">
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-[#e6fff5] rounded text-[#2ea58c] font-mono">
                    {selectedArticle.author}
                  </div>
                  <span className="text-[#3a3a3a]">
                    {formatDate(selectedArticle.timestamp)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleVote(selectedArticle.id, true)}
                    className="flex items-center gap-1 px-2 py-1 rounded hover:bg-green-50 transition-colors"
                  >
                    <LuThumbsUp
                      className={`w-4 h-4 ${
                        selectedArticle.upvotes > 0
                          ? "text-green-600"
                          : "text-[#3a3a3a]"
                      }`}
                    />
                    <span className="font-medium">
                      {selectedArticle.upvotes}
                    </span>
                  </button>

                  <button
                    onClick={() => handleVote(selectedArticle.id, false)}
                    className="flex items-center gap-1 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                  >
                    <LuThumbsDown
                      className={`w-4 h-4 ${
                        selectedArticle.downvotes > 0
                          ? "text-red-600"
                          : "text-[#3a3a3a]"
                      }`}
                    />
                    <span className="font-medium">
                      {selectedArticle.downvotes}
                    </span>
                  </button>
                </div>
              </div>

              <div className="prose max-w-none mb-6 text-[#171717] bg-[#f7f3eb] p-6 rounded-lg whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="border-t border-[#eeeae2] pt-4 mt-4 flex justify-between items-center">
                <div className="text-xs text-[#3a3a3a]">
                  <span className="bg-[#e6fff5] px-2 py-1 rounded text-[#2ea58c]">
                    Cryptographically secured
                  </span>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 rounded-lg bg-[#eeeae2] hover:bg-[#e6e2d8] transition-colors text-[#3a3a3a]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
