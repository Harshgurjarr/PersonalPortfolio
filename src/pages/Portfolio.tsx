import WarpShaderHero from "@/components/ui/wrap-shader";

export default function Portfolio() {
  const handleViewProjects = () => {
    // Scroll to projects section or navigate
    console.log("Navigate to projects");
  };

  const handleContact = () => {
    // Open contact form or navigate to contact
    console.log("Open contact");
  };

  return (
    <div className="min-h-screen">
      <WarpShaderHero 
        title="John Doe"
        subtitle="Full-stack Developer specializing in React, Node.js, and modern web technologies. Creating beautiful, performant web experiences."
        primaryButtonText="View My Work"
        secondaryButtonText="Get In Touch"
        onPrimaryClick={handleViewProjects}
        onSecondaryClick={handleContact}
      />
      
      {/* Add more sections here later */}
      <section className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-center text-gray-700">
            Your portfolio content will go here...
          </p>
        </div>
      </section>
    </div>
  );
}
