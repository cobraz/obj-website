// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import category from './documents/category';
import person from './documents/person';
import project from './documents/project';
import siteSettings from './documents/siteSettings';
import post from './documents/post';
import link from './documents/link';
import homepage from './documents/homepage';
import slide from './documents/slide';
import page from './documents/page';

// Object types
import bioPortableText from './objects/bioPortableText';
import figure from './objects/figure';
import projectMember from './objects/projectMember';
import projectPortableText from './objects/projectPortableText';
import simplePortableText from './objects/simplePortableText';
import callToActionElement from './objects/callToActionElement';
import contactBox from './objects/contactBox';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    projectMember,
    projectPortableText,
    simplePortableText,
    callToActionElement,
    contactBox,
    // The following are document types which will appear
    // in the studio.
    category,
    person,
    project,
    siteSettings,
    post,
    link,
    homepage,
    slide,
    page
  ])
});
