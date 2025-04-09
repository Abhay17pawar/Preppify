"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  BarChart3,
  BookOpen,
  Calendar,
  Clock,
  FileText,
  Mic,
  Play,
  Settings,
  User,
  ChevronRight,
  Bell,
  Search,
  Sparkles,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { UserButton } from "@clerk/nextjs"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-30">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-70"></div>
            <div className="relative bg-gray-900 rounded-full p-1">
              <Mic className="h-5 w-5 text-purple-500" />
            </div>
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Preppify
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-purple-500"></span>
          </Button>
          <div className="p-1 border border-gray-600 rounded">
        <UserButton  />
        </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-gray-900/80 backdrop-blur-md border-r border-gray-800/50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-4 flex items-center space-x-2 border-b border-gray-800/50 h-16">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-70"></div>
            <div className="relative bg-gray-900 rounded-full p-1">
              <Mic className="h-5 w-5 text-purple-500" />
            </div>
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Preppify
          </span>
        </div>

        <div className="p-3">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search..."
              className="pl-9 bg-gray-800/50 border-gray-700 focus:border-purple-500 text-sm h-9"
            />
          </div>

          <div className="space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white"
            >
              <BarChart3 className="h-5 w-5 text-purple-400" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/interviews"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
            >
              <Mic className="h-5 w-5 text-gray-400" />
              <span>Interviews</span>
              <Badge className="ml-auto bg-purple-600 hover:bg-purple-700">3</Badge>
            </Link>
            <Link
              href="/dashboard/practice"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
            >
              <Play className="h-5 w-5 text-gray-400" />
              <span>Practice</span>
            </Link>
            <Link
              href="/dashboard/resources"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
            >
              <BookOpen className="h-5 w-5 text-gray-400" />
              <span>Resources</span>
            </Link>
            <Link
              href="/dashboard/calendar"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
            >
              <Calendar className="h-5 w-5 text-gray-400" />
              <span>Calendar</span>
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800/50">
            <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Recent Interviews
            </h3>
            <div className="space-y-1">
              {[
                { title: "Frontend Developer", date: "Today" },
                { title: "System Design", date: "Yesterday" },
                { title: "Behavioral Interview", date: "3 days ago" },
              ].map((interview, index) => (
                <Link
                  key={index}
                  href={`/dashboard/interviews/${index}`}
                  className="flex items-center px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mr-3">
                    <FileText className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{interview.title}</p>
                    <p className="text-xs text-gray-500">{interview.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800/50">
          <div className="flex items-center space-x-3">
           <UserButton/>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">Jamie Doe</p>
              <p className="text-xs text-gray-400 truncate">jamie@example.com</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : ""}`}>
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between p-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-10">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
            <UserButton/>
        </div>

        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Welcome back, Jamie!</h1>
              <p className="text-gray-400">Track your progress and prepare for your next interview.</p>
            </div>
            <Link href="/interview">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-700/20 group">
                Start New Interview
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800/50 shadow-lg hover:shadow-purple-700/5 transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-400 text-sm font-normal">Total Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm text-green-500 mt-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <span>+3 this week</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800/50 shadow-lg hover:shadow-blue-700/5 transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-400 text-sm font-normal">Practice Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8.5</div>
                <div className="text-sm text-green-500 mt-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <span>+2.5 hrs this week</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800/50 shadow-lg hover:shadow-purple-700/5 transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-400 text-sm font-normal">Average Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">78%</div>
                <div className="text-sm text-green-500 mt-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <span>+5% improvement</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="progress" className="mb-8">
            <TabsList className="bg-gray-900/60 border border-gray-800/50">
              <TabsTrigger value="progress">Your Progress</TabsTrigger>
              <TabsTrigger value="recent">Recent Interviews</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
            </TabsList>

            <TabsContent value="progress" className="mt-4">
              <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800/50 shadow-lg">
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                  <CardDescription className="text-gray-400">Track your interview preparation journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-md bg-purple-600/20 flex items-center justify-center mr-3">
                            <Code className="h-4 w-4 text-purple-500" />
                          </div>
                          <span>Technical Skills</span>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress
                        value={85}
                        className="h-2 bg-gray-800 bg-gradient-to-r from-cyan-500 to-green-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-md bg-blue-600/20 flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-500"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                          </div>
                          <span>Communication</span>
                        </div>
                        <span className="text-sm font-medium">72%</span>
                      </div>
                      <Progress
                        value={72}
                        className="h-2 bg-gray-800 bg-gradient-to-r from-cyan-500 to-green-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-md bg-cyan-600/20 flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-cyan-500"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </div>
                          <span>Problem Solving</span>
                        </div>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                      <Progress
                        value={68}
                        className="h-2 bg-gray-800 bg-gradient-to-r from-cyan-500 to-green-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-md bg-green-600/20 flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-green-500"
                            >
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                          </div>
                          <span>Behavioral Questions</span>
                        </div>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <Progress
                        value={90}
                        className="h-2 bg-gray-800 bg-gradient-to-r from-cyan-500 to-green-500"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recent" className="mt-4">
              <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800/50 shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Interviews</CardTitle>
                  <CardDescription className="text-gray-400">Your latest practice sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Frontend Developer Interview",
                        date: "Today",
                        score: "82%",
                        duration: "28 min",
                        type: "Technical",
                      },
                      {
                        title: "System Design Challenge",
                        date: "Yesterday",
                        score: "75%",
                        duration: "45 min",
                        type: "Technical",
                      },
                      {
                        title: "Behavioral Interview",
                        date: "3 days ago",
                        score: "90%",
                        duration: "32 min",
                        type: "Behavioral",
                      },
                    ].map((interview, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200 group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                            <FileText className="h-6 w-6 text-purple-500" />
                          </div>
                          <div>
                            <p className="font-medium group-hover:text-purple-400 transition-colors">
                              {interview.title}
                            </p>
                            <div className="flex items-center text-sm text-gray-400 mt-1">
                              <Clock className="h-3 w-3 mr-1" />
                              <span className="mr-3">{interview.date}</span>
                              <Badge variant="outline" className="text-xs bg-gray-800 border-gray-700 text-gray-300">
                                {interview.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <p className="font-medium">{interview.score}</p>
                            <div className="flex items-center text-sm text-gray-400">
                              <Clock className="h-3 w-3 mr-1" />
                              {interview.duration}
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <ChevronRight className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button
                      variant="outline"
                      className="border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-200"
                    >
                      View All Interviews
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommended" className="mt-4">
              <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800/50 shadow-lg">
                <CardHeader>
                  <CardTitle>Recommended Practice</CardTitle>
                  <CardDescription className="text-gray-400">Based on your performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-gray-800/80 border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base group-hover:text-purple-400 transition-colors">
                            System Design Interview
                          </CardTitle>
                          <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                            <Sparkles className="h-4 w-4 text-purple-500" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-400 mb-4">
                          Improve your system design skills with this focused practice session. Recommended based on
                          your recent performance.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>45 min</span>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                          >
                            Start Practice
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800/80 border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base group-hover:text-blue-400 transition-colors">
                            Algorithm Challenges
                          </CardTitle>
                          <div className="h-8 w-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                            <Zap className="h-4 w-4 text-blue-500" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-400 mb-4">
                          Practice common algorithm questions for technical interviews. Includes data structures and
                          time complexity challenges.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>60 min</span>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                          >
                            Start Practice
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Upcoming Interview Prep</h3>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Mock Interview: Senior Frontend Developer",
                          time: "Tomorrow, 2:00 PM",
                          company: "Tech Giants Inc.",
                        },
                        {
                          title: "Behavioral Interview Practice",
                          time: "Friday, 10:00 AM",
                          company: "Career Coach Session",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                        >
                          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mr-4">
                            <Calendar className="h-5 w-5 text-purple-400" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.title}</p>
                            <div className="flex items-center text-xs text-gray-400 mt-1">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{item.time}</span>
                              <span className="mx-2">•</span>
                              <span>{item.company}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="19" cy="12" r="1" />
                              <circle cx="5" cy="12" r="1" />
                            </svg>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Skills to Improve */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800/50 shadow-lg col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Skills to Improve</CardTitle>
                <CardDescription className="text-gray-400">
                  Focus on these areas to boost your interview performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 flex items-start">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-400"
                      >
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">System Design Fundamentals</h4>
                      <p className="text-sm text-gray-400 mb-3">
                        Your system design responses could be more structured. Focus on breaking down complex problems
                        into manageable components.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-purple-600/10 text-purple-400 border-purple-500/30">
                          Scalability
                        </Badge>
                        <Badge variant="outline" className="bg-blue-600/10 text-blue-400 border-blue-500/30">
                          Database Design
                        </Badge>
                        <Badge variant="outline" className="bg-cyan-600/10 text-cyan-400 border-cyan-500/30">
                          API Architecture
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 flex items-start">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-400"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <line x1="10" y1="9" x2="8" y2="9"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Concise Communication</h4>
                      <p className="text-sm text-gray-400 mb-3">
                        Your responses tend to be lengthy. Practice being more concise while still conveying all
                        necessary information.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-blue-600/10 text-blue-400 border-blue-500/30">
                          STAR Method
                        </Badge>
                        <Badge variant="outline" className="bg-purple-600/10 text-purple-400 border-purple-500/30">
                          Structured Responses
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-200"
                  >
                    View Detailed Feedback
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800/50 shadow-lg">
              <CardHeader>
                <CardTitle>Learning Resources</CardTitle>
                <CardDescription className="text-gray-400">Recommended materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "System Design Interview Guide", type: "Article", time: "15 min read" },
                    { title: "Mastering Behavioral Questions", type: "Video", time: "32 min" },
                    { title: "Frontend Performance Optimization", type: "Tutorial", time: "45 min" },
                  ].map((resource, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm group-hover:text-purple-400 transition-colors">
                          {resource.title}
                        </h4>
                        <Badge variant="outline" className="text-xs bg-gray-800 border-gray-700 text-gray-300">
                          {resource.type}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{resource.time}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 px-2 text-purple-400 hover:text-purple-300 hover:bg-purple-600/10"
                        >
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30">
                  <div className="flex items-center mb-2">
                    <Sparkles className="h-5 w-5 text-purple-400 mr-2" />
                    <h4 className="font-medium">Premium Content</h4>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Unlock expert-led interview workshops and advanced practice scenarios.
                  </p>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                  >
                    Upgrade to Pro
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function Code(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  )
}
