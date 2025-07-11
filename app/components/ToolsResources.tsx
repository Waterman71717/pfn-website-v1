import ResourceDownload from "./ResourceDownload"

export default function ToolsResources() {
  const resources = [
    {
      title: "Startup Process Improvement - Sample Edition",
      description: "Complete introduction, Chapter 1, and key excerpts from the full methodology",
      resourceType: "PDF Sample",
      fileName: "startup_process_sample.pdf",
      featured: true,
    },
    {
      title: "Process Maturity Assessment",
      description: "Comprehensive 40-question quiz to assess your startup's operational excellence level",
      resourceType: "Interactive PDF",
      fileName: "process_maturity_quiz.pdf",
    },
    {
      title: "Startup Metrics Tracker",
      description: "CSV template with key performance indicators and operational metrics for startups",
      resourceType: "CSV Template",
      fileName: "startup-metrics-tracker.csv",
    },
    {
      title: "Process Mapping Template",
      description: "Visual templates and worksheets for mapping your startup processes using Unified Magic methodology",
      resourceType: "PDF Template",
      fileName: "process_mapping_template.pdf",
    },
    {
      title: "Lean Startup Canvas - Process Optimized",
      description: "Enhanced business model canvas integrating process improvement thinking",
      resourceType: "PDF Canvas",
      fileName: "lean_startup_canvas.pdf",
    },
    {
      title: "Kaizen Daily Huddle Worksheet",
      description: "Structure your daily improvement meetings with this proven framework",
      resourceType: "PDF Worksheet",
      fileName: "kaizen_daily_huddle_worksheet.pdf",
    },
    {
      title: "Tool Stack Recommendations Guide",
      description: "Comprehensive guide to essential software and tools for startup process excellence",
      resourceType: "PDF Guide",
      fileName: "tool_stack_recommendations.pdf",
    },
  ]

  return (
    <section id="tools" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Tools & Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use templates and tools to kickstart your process improvement journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {resources.map((resource, index) => (
              <div key={index} className={resource.featured ? "md:col-span-2 lg:col-span-1" : ""}>
                <ResourceDownload
                  title={resource.title}
                  description={resource.description}
                  resourceType={resource.resourceType}
                  fileName={resource.fileName}
                  featured={resource.featured}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Get the Complete Starter Kit</h3>
              <p className="text-gray-300 mb-6">
                Download all templates, worksheets, and guides in one comprehensive package
              </p>
              <ResourceDownload
                title="Complete PFN Starter Kit"
                description="All 7 resources bundled together + exclusive implementation checklist"
                resourceType="ZIP Bundle"
                fileName="Tools & Resources.zip"
              />
            </div>
          </div>

          {/* Resource Categories */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-12">Resource Categories</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Assessment Tools</h4>
                <p className="text-gray-300 text-sm">
                  Evaluate your current process maturity and identify improvement opportunities
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Implementation Templates</h4>
                <p className="text-gray-300 text-sm">
                  Ready-to-use templates for mapping, tracking, and optimizing your processes
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Strategic Frameworks</h4>
                <p className="text-gray-300 text-sm">
                  Business model canvases and strategic planning tools for process-first thinking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
