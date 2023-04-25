const slugify = require('slugify')

module.exports = {
  beforeUpdate(event) {
    const params = event.params;

    if (!event.params.data.title) return;

    // If the title has changed, update the slug
    const slugExpected = slugify(params.data.title, { lower: true });
    const slugActual = params.data.slug;

    if (slugExpected !== slugActual) event.params.data.slug = slugify(slugExpected, { lower: true });
  },
};