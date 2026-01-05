export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About</h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I'm a Linux Systems Administrator based in Angola with a passion for building secure, scalable, and
              automated infrastructure solutions. My expertise spans across Ubuntu Server administration, network
              configuration, and enterprise service deployment.
            </p>

            <p>
              With hands-on experience in virtualizing environments, automating repetitive tasks through Bash scripting,
              and implementing robust security measures, I help organizations maintain reliable IT infrastructure that
              supports their business goals.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-3">Professional Values</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "System Stability & Uptime",
                  "Security Best Practices",
                  "Infrastructure Standardization",
                  "Proactive Monitoring",
                  "Documentation & Knowledge Sharing",
                  "Continuous Improvement",
                ].map((value) => (
                  <li key={value} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}