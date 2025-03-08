"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Copy } from "lucide-react"
import type { GitCommand } from "@/lib/types";
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// import { useToast } from "@/hooks/use-toast"
import { toast } from "sonner"


interface CommandListProps {
  commands: GitCommand[]
}

export function CommandList({ commands }: CommandListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
//   const { toast } = useToast()

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // toast({
    //   title: "Copied to clipboard",
    //   description: "The command has been copied to your clipboard.",
    //   duration: 2000,
    // })
    toast("Copied to clipboard")
  }

  if (commands.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-lg text-muted-foreground">No git tricks found matching your search.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {commands.map((command) => (
        <div key={command.id} className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => toggleExpand(command.id)}
          >
            <div className="flex items-center gap-2">
              {expandedId === command.id ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
              <h3 className="font-medium">{command.name}</h3>
            </div>
            <div className="flex gap-2">
              {command.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              expandedId === command.id ? "max-h-[500px] pb-4" : "max-h-0",
            )}
          >
            <div className="px-4 pb-2">
              <div className="border-t pt-4">
                <p className="mb-4">{command.description}</p>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{command.usage}</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation()
                      copyToClipboard(command.usage)
                    }}
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy code</span>
                  </Button>
                </div>
                {command.example && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Example:</h4>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code>{command.example}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}