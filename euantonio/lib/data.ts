import type { Skill, Project, Certification, BlogPost } from "./types"

export const skills: Skill[] = [
  {
    category: "Operating Systems",
    items: [
      "Ubuntu Server 20.04, 22.04, 24.04",
      "Systemd service management",
      "System logs & troubleshooting",
      "User & permission management",
    ],
  },
  {
    category: "Networking",
    items: ["TCP/IP protocol suite", "VLAN configuration", "DHCP & DNS setup", "Routing & structured cabling"],
  },
  {
    category: "Services",
    items: [
      "Apache & Nginx web servers",
      "SSH secure access",
      "Samba file sharing",
      "NFS distributed storage",
      "Bind DNS server",
      "DHCP server configuration",
    ],
  },
  {
    category: "Virtualization",
    items: ["VirtualBox environments", "VMware infrastructure", "Virtual lab networks", "Snapshot management"],
  },
  {
    category: "Automation",
    items: ["Bash scripting", "Cron job scheduling", "Automated backup solutions", "Monitoring scripts"],
  },
  {
    category: "Security",
    items: [
      "UFW firewall management",
      "iptables configuration",
      "Server hardening practices",
      "SSH key authentication",
      "Security updates & patching",
    ],
  },
]

export const projects: Project[] = [
  {
    id: "enterprise-infrastructure",
    name: "Enterprise Linux Infrastructure",
    problem:
      "Small business needed scalable, reliable server infrastructure to support growing operations with limited IT budget.",
    architecture:
      "Multi-server setup with Ubuntu 22.04 LTS, including web servers (Nginx), file servers (Samba/NFS), DNS (Bind), and DHCP services on segregated VLANs.",
    technologies: ["Ubuntu Server 22.04", "Nginx", "Samba", "Bind DNS", "DHCP", "UFW"],
    implementation:
      "Deployed 5 physical servers with role-based configuration. Implemented network segmentation using VLANs for security. Configured automated backups to NFS storage with retention policies.",
    challenges:
      "Legacy Windows applications required Samba integration. Network routing between VLANs needed careful firewall rules. Zero-downtime migration from existing infrastructure.",
    results:
      "99.8% uptime over 12 months. 40% reduction in IT costs. Automated processes reduced admin time by 60%. Improved security posture with centralized authentication.",
    github: "https://github.com",
    image: "/linux-server-infrastructure-diagram.jpg",
  },
  {
    id: "automated-backup",
    name: "Automated Backup System",
    problem: "Manual backup processes were inconsistent, time-consuming, and prone to human error, risking data loss.",
    architecture:
      "Centralized backup solution using Bash scripts, rsync, and cron jobs. Incremental backups to local NFS storage with weekly full backups to off-site location.",
    technologies: ["Bash", "rsync", "Cron", "NFS", "GPG encryption"],
    implementation:
      "Created modular Bash scripts for different backup types (databases, config files, user data). Implemented email notifications on success/failure. Added GPG encryption for sensitive data.",
    challenges:
      "Bandwidth limitations for off-site backups required incremental strategy. Database backups needed coordination with application downtime windows. Monitoring and alerting integration.",
    results:
      "Zero data loss incidents. Backup time reduced from 4 hours to 30 minutes. Successfully restored from backup during hardware failure with 15-minute RTO. Compliance with data retention policies.",
    github: "https://github.com",
    image: "/automated-backup-system-monitoring.jpg",
  },
  {
    id: "monitoring-setup",
    name: "Service Monitoring & Alerting",
    problem:
      "IT team unaware of service outages until users reported issues. No visibility into system health or performance metrics.",
    architecture:
      "Custom monitoring solution using Bash scripts with systemd integration. Checks for service availability, disk space, CPU/memory usage, and network connectivity.",
    technologies: ["Bash", "systemd", "systemctl", "mail", "cron"],
    implementation:
      "Developed lightweight monitoring scripts that run every 5 minutes via cron. Integrated with systemd for service status checks. Email alerts with severity levels (warning/critical).",
    challenges:
      "Avoiding false positives required intelligent thresholds. Email delivery reliability needed backup notification methods. Performance impact of monitoring tools needed optimization.",
    results:
      "Mean time to detection reduced from 45 minutes to 5 minutes. Proactive resolution of 80% of issues before user impact. Detailed historical data enabled capacity planning.",
    github: "https://github.com",
    image: "/server-monitoring-dashboard-terminal.jpg",
  },
  {
    id: "server-hardening",
    name: "Ubuntu Server Security Hardening",
    problem:
      "Servers vulnerable to unauthorized access and potential security breaches. No standardized security baseline.",
    architecture:
      "Multi-layered security approach: SSH hardening, firewall rules (UFW), automatic updates, audit logging, and intrusion detection.",
    technologies: ["UFW", "SSH", "fail2ban", "unattended-upgrades", "auditd"],
    implementation:
      "Disabled root SSH login and password authentication. Configured SSH key-only access with fail2ban. Implemented UFW rules with default-deny policy. Enabled automatic security updates.",
    challenges:
      "Balancing security with operational needs. Ensuring legitimate admin access while blocking threats. Audit log volume required log rotation strategy.",
    results:
      "Zero successful intrusion attempts. Passed external security audit. Reduced attack surface by 75%. Automated compliance reporting for security policies.",
    github: "https://github.com",
    image: "/security-hardening-terminal-firewall.jpg",
  },
]

export const certifications: Certification[] = [
  {
    name: "CCNA - Cisco Certified Network Associate",
    organization: "Cisco Networking Academy",
    status: "Completed",
    date: "2023",
  },
  {
    name: "Linux Essentials",
    organization: "Linux Professional Institute (LPI)",
    status: "Certified",
    date: "2022",
  },
  {
    name: "Network Security",
    organization: "Cisco NetAcad",
    status: "Completed",
    date: "2023",
  },
  {
    name: "Engineering Informatics",
    organization: "Universidade Católica de Angola",
    status: "In Progress",
    date: "2021 - Present",
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: "securing-ssh",
    title: "Securing SSH: Beyond the Basics",
    excerpt:
      "Deep dive into SSH hardening techniques including key management, port knocking, and two-factor authentication implementation.",
    date: "2025-01-15",
    readTime: "8 min read",
  },
  {
    id: "bash-automation",
    title: "Bash Scripting for Automation",
    excerpt:
      "Practical guide to writing robust Bash scripts for system administration tasks with error handling and logging best practices.",
    date: "2024-12-20",
    readTime: "12 min read",
  },
  {
    id: "network-troubleshooting",
    title: "Network Troubleshooting Methodology",
    excerpt:
      "Systematic approach to diagnosing network issues using tcpdump, netstat, and other Linux networking tools.",
    date: "2024-11-10",
    readTime: "10 min read",
  },
]