import {SectionPage} from "./SectionPage";

export const SectionView = sections => ({component: SectionPage, props: {sections}})

export const Section = (name, fields) => ({name, fields});

