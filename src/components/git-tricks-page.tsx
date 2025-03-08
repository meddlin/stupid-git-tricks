"use client"

import { useState } from "react"
import { gitCommands } from "@/lib/data"
import { SearchBar } from "@/components/search-bar"
import { CommandList } from "@/components/command-list"

export function GitTricksPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCommands = gitCommands.filter((command) => {
    const searchLower = searchQuery.toLowerCase()
    return (
      command.name.toLowerCase().includes(searchLower) ||
      command.description.toLowerCase().includes(searchLower) ||
      command.usage.toLowerCase().includes(searchLower) ||
      command.tags.some((tag: string) => tag.toLowerCase().includes(searchLower))
    )
  })

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <h1 className="text-2xl font-bold tracking-tight">Stupid Git Tricks</h1>
        </div>
      </header>
      <main className="container py-6">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CommandList commands={filteredCommands} />
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Stupid Git Tricks. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

