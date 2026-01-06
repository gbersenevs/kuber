import { Check, Building2, Home as HomeIcon, Store, Phone, MapPin } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { ServiceCard } from "@/components/service-card";
import { Collapsible } from "@/components/collapsible";
import { Container } from "@/components/container";

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang as any);
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 2013;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-4">{dict.company.trustLine}</p>
              <h1 className="mb-6">{dict.home.hero.headline}</h1>
              <p className="text-lg text-text-muted mb-8 max-w-lg">
                {dict.home.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={`/${params.lang}/contact`} size="lg">
                  {dict.buttons.requestQuote}
                </Button>
                <Button href={`/${params.lang}/services`} variant="outline" size="lg">
                  {dict.buttons.viewServices}
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-square max-w-md ml-auto">
                <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
                <div className="absolute top-8 left-8 right-8 bottom-8 bg-secondary/20 rounded-lg"></div>
                <div className="absolute top-16 left-16 right-16 bottom-16 bg-tertiary/30 rounded-lg"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <Section>
        <SectionHeader title={dict.home.mission.title} />
        <p className="text-lg max-w-3xl">{dict.home.mission.content}</p>
      </Section>

      {/* Vision Section */}
      <Section background="surface">
        <SectionHeader title={dict.home.vision.title} />
        <ul className="space-y-4 mb-6 max-w-3xl">
          {dict.home.vision.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-text-muted">{bullet}</span>
            </li>
          ))}
        </ul>
        <Collapsible>
          <p className="text-text-muted">{dict.home.vision.expandedContent}</p>
        </Collapsible>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionHeader title={dict.home.values.title} centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            dict.home.values.quality,
            dict.home.values.responsibility,
            dict.home.values.reliability,
            dict.home.values.transparency,
          ].map((value) => (
            <Card key={value.title} padding="lg" className="text-center">
              <CardHeader>
                <CardTitle as="h4">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section background="surface">
        <SectionHeader title={dict.home.servicesSection.title} centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title={dict.services.dailyCleaning}
            description={dict.home.servicesSection.dailyCleaning.description}
            href={`/${params.lang}/services/daily-cleaning`}
          />
          <ServiceCard
            title={dict.services.generalCleaning}
            description={dict.home.servicesSection.generalCleaning.description}
            href={`/${params.lang}/services/general-cleaning`}
          />
          <ServiceCard
            title={dict.services.facilitySupport}
            description={dict.home.servicesSection.facilitySupport.description}
            href={`/${params.lang}/services/facility-support`}
          />
        </div>
      </Section>

      {/* Objects We Serve Section */}
      <Section>
        <SectionHeader title={dict.home.objects.title} centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { category: dict.home.objects.offices, icon: Building2 },
            { category: dict.home.objects.residential, icon: HomeIcon },
            { category: dict.home.objects.commercial, icon: Store },
          ].map(({ category, icon: Icon }) => (
            <Card key={category.title} padding="lg">
              <CardHeader>
                <Icon className="w-8 h-8 text-primary mb-3" />
                <CardTitle as="h4">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose KUBER Section */}
      <Section background="surface">
        <SectionHeader title={dict.home.whyChoose.title} centered />
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {dict.home.whyChoose.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Compliance Section */}
      <Section>
        <SectionHeader title={dict.home.compliance.title} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-text-muted mb-6">{dict.home.compliance.content}</p>
          </div>
          <Card padding="lg" className="bg-surface border-0">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-text-muted">{dict.home.compliance.regNumber}</p>
                  <p className="font-medium text-text">{dict.company.registrationNumber}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-text-muted">{dict.home.compliance.legalAddress}</p>
                  <p className="font-medium text-text">{dict.company.address.full}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-text-muted">{dict.home.compliance.contactPhone}</p>
                  <a
                    href={`tel:${dict.company.phone.replace(/\s/g, "")}`}
                    className="font-medium text-text hover:text-primary transition-colors"
                  >
                    {dict.company.phone}
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="surface">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">{dict.home.cta.title}</h2>
          <p className="text-text-muted text-lg mb-8">{dict.home.cta.content}</p>
          <Button href={`/${params.lang}/contact`} size="lg">
            {dict.buttons.contactUs}
          </Button>
        </div>
      </Section>
    </>
  );
}

