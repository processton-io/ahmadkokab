import CMS from 'netlify-cms-app';
import { Widget as UuidWidget } from 'netlify-cms-widget-id';
import { Widget as PermalinkWidget } from 'netlify-cms-widget-permalink';

import forms from './collections/forms';
import pages from './collections/pages';
import theme_docs from './collections/theme_docs';
import pillar from './collections/pillar';
import skills from './collections/skills';
import projects from './collections/projects';
import blogs from './collections/blogs';
import stories from './collections/stories';
import tips from './collections/tips';
import authors from './collections/authors';
import settings from './collections/settings';
import PillarPreview from './previews/PillarPreview';
import PagePreview from './previews/PagePreview';
import BlogPreview from './previews/BlogPreview';
import StoriesPreview from './previews/StoriesPreview';
import TipsPreview from './previews/TipsPreview';

window.CMS_MANUAL_INIT = true;

const config = {
  config: {
    load_config_file: true,
    display_url: process.env.GATSBY_APP_URL,
    local_backend: true,
    backend: {
      name: 'git-gateway',
      branch: 'main',
    },
    slug: {
      encoding: 'ascii',
      clean_accents: true,
    },
    media_folder: '/static/img',
    public_folder: '/img',
    collections: [ pillar, pages, blogs, stories, tips,projects, skills, forms,authors, settings],
  },
};

CMS.registerPreviewStyle('../commons.css');
CMS.registerPreviewTemplate('pillar', PillarPreview);
CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('blog', BlogPreview);
CMS.registerPreviewTemplate('story', StoriesPreview);
CMS.registerPreviewTemplate('tip', TipsPreview);

CMS.registerWidget(UuidWidget);
CMS.registerWidget(PermalinkWidget);

CMS.init(config);
