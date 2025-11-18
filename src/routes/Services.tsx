import ServiceCard from '@/components/ServiceCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Services')({
  component: RouteComponent,
})

function RouteComponent() {
  const services = [
    {
      title: "Website Development",
      description: "We create modern, responsive, and user-friendly websites that provide a seamless experience for users."
    },
    {
      title: "Performance & Optimization",
      description: "We optimize websites for speed, security, and accessibility to ensure a smooth and efficient user experience."
    },
    {
      title: "Specialized Niche Services",
      description: "We provide specialized niche services to meet the unique needs of our clients."
    },
    {
      title: "Interactive & Dynamic Features",
      description: "We add interactive and dynamic features to websites to enhance user engagement and provide a more engaging experience."
    },
    {
      title: "Maintenance, Support & Audits",
      description: "We provide regular maintenance and support to ensure websites run smoothly and are secure."
    },
    {
      title: "E-commerce Development",
      description: "We create e-commerce websites that provide a seamless and secure shopping experience for users."
    }
  ]
  return (
    // <section className='w-full h-fit grow md:max-h-[calc(100vh-7rem)] xl:max-h-dvh rounded-2xl md:overflow-y-auto mb-6 md:mb-0 lg:py-7 order-2'>
    <section className='w-full grow sm:max-h-[calc(100vh-7rem)] md:max-h-dvh xl:max-h-dvh rounded-2xl overflow-y-auto mb-6 md:mb-0 lg:py-5 order-2'>
      <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  )
}
