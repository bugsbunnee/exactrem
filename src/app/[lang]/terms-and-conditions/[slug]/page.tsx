
'use server';

import React from 'react';
import _ from 'lodash';

import { notFound } from 'next/navigation';

import { Container, Grid } from '@radix-ui/themes';
import { Locale } from '../../../../../i18n.config';
import { getDictionary } from '@/utils/dictionaries';
import { TermAndCondition } from '@/utils/models';

import Footer from '@/components/sections/Footer/Footer';
import NavBar from '@/components/sections/NavBar/NavBar';
import SubLinks from '../_components/SubLinks';
import Section from '../_components/Section';

interface Props {
    params: { slug: string; lang: Locale };
}

const getNoticeBySlug = async (slug: string, lang: Locale): Promise<TermAndCondition | undefined> => {
    const dictionary = await getDictionary(lang);
    return _.get(dictionary.page.terms_and_conditions, slug);
};

const TermsAndConditionsPage: React.FC<Props> = async ({ params }) => {
    const notice = await getNoticeBySlug(params.slug, params.lang);
    if (!notice) notFound();

    return ( 
        <>
            <NavBar />

            <Container className='py-16'>
                <Grid columns='30% 70%' className="relative" align='start' gap='4'>
                    <SubLinks sections={notice.list} title={notice.title} />
                
                    <article className=''>
                        <Section termAndCondition={notice} />
                    </article>
                </Grid>
            </Container>


            <Footer />
        </>
    );
};

export const generateMetadata = async ({ params }: Props) => {
    const notice = await getNoticeBySlug(params.slug, params.lang)
    if (!notice) return {};
  
    return _.pick(notice, ['title', 'description'])
};

export const generateStaticParams = async () => {
    return [{  slug: 'terms', }, { slug: 'privacy' }]
};

export default TermsAndConditionsPage;