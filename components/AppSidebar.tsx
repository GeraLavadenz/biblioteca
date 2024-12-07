"use client"; // Asegúrate de que este es el primer código en el archivo
import Leyendo from "@/app/leyendo/page";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useState } from "react";

// Menu items for Books
const bookItems = [
  {
    title: "Leyendo ahora",
    url: "/leyendo",
    icon: Inbox,
  },
  {
    title: "Por leer",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Leídos",
    url: "#",
    icon: Search,
  },
];

// Menu items for Series
const seriesItems = [
  {
    title: "Viendo ahora",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Por ver",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Vistas",
    url: "#",
    icon: Search,
  },
];

// Menu items for Movies
const movieItems = [
  {
    title: "Viendo ahora",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Por ver",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Vistas",
    url: "#",
    icon: Search,
  },
];

export function AppSidebar() {
  const [collapsedBooks, setCollapsedBooks] = useState(true);
  const [collapsedSeries, setCollapsedSeries] = useState(true);
  const [collapsedMovies, setCollapsedMovies] = useState(true);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Books Section */}
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setCollapsedBooks(!collapsedBooks)}>
                  Libros
                </SidebarMenuButton>
                {!collapsedBooks && (
                  <SidebarMenu>
                    {bookItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                )}
              </SidebarMenuItem>

              {/* Series Section */}
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setCollapsedSeries(!collapsedSeries)}>
                  Series
                </SidebarMenuButton>
                {!collapsedSeries && (
                  <SidebarMenu>
                    {seriesItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                )}
              </SidebarMenuItem>

              {/* Movies Section */}
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setCollapsedMovies(!collapsedMovies)}>
                  Películas
                </SidebarMenuButton>
                {!collapsedMovies && (
                  <SidebarMenu>
                    {movieItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                )}
              </SidebarMenuItem>

              {/* Settings Section */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Settings />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}