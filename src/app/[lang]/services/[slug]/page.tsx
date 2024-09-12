import React from 'react';
import _ from 'lodash';

import { notFound } from 'next/navigation';

import Footer from '@/components/sections/Footer/Footer';
import GeneralServiceCTA from '../_components/GeneralServiceCTA';
import NavBar from '@/components/sections/NavBar/NavBar';
import ServiceSlughero from '@/app/[lang]/services/_components/ServiceSlugHero';
import ServiceCoverage from '@/app/[lang]/services/_components/ServiceCoverage';
import Summary from '@/app/[lang]/services/_components/Summary';
import ServiceSectionContent from '../_components/ServiceSectionContent';

import { getDictionary } from '@/utils/dictionaries';
import { Locale } from '../../../../../i18n.config';
import { summarize } from '@/utils/lib';


interface Props {
    params: { slug: string; lang: Locale };
}

interface ServiceListItem {
    titleOne: string;
    titleTwo: string;
    bgClass: string;
    iconKey: string;
    serviceList: { src: string; title: string; description: string; }[]
}

interface ServiceDetail {
    hero: {
        title_one: string;
        title_two: string;
        description: string;
        cta: string;
    },
    overview: {
        title: string;
        description: string;
        cta: string;
    },
    service_list: ServiceListItem[];
}

const getServiceBySlug = async (slug: string, lang: Locale): Promise<ServiceDetail | undefined> => {
    const dictionary = await getDictionary(lang);
    return _.get(dictionary.page.services.content, slug);
};

const ServicesPage: React.FC<Props> = async ({ params }) => {
    const service = await getServiceBySlug(params.slug, params.lang);
    if (!service) notFound();

    return (
        <>
            <NavBar />
            
            <ServiceSlughero 
                titleOne={service.hero.title_one}
                titleTwo={service.hero.title_two}
                ctaText={service.hero.cta}
                description={service.hero.description}
            />

            <ServiceCoverage />

            <Summary list={service.service_list.map((service) => ({ 
                title: service.titleOne + service.titleTwo, 
                iconKey: service.iconKey, 
                description: service.serviceList.length > 0 ? summarize(service.serviceList[0].description, 100) : ''
            }))} />

            {service.service_list.map((service) => (
                <ServiceSectionContent 
                    key={service.titleOne} 
                    titleOne={service.titleOne} 
                    titleTwo={service.titleTwo}
                    id={service.titleOne + service.titleTwo}
                    bgClass={service.bgClass}
                    serviceList={service.serviceList}
                />
            ))}

            <GeneralServiceCTA 
                title={service.overview.title}
                description={service.overview.description}
                cta={service.overview.cta}
            />

            <Footer />
        </>
    )
};

export const generateMetadata = async ({ params }: Props) => {
    const service = await getServiceBySlug(params.slug, params.lang)
    if (!service) return {};
  
    return _.pick(service.overview, ['title', 'description'])
};

export const generateStaticParams = async () => {
    return [{  slug: 'person-to-person' }]
};

export default ServicesPage;