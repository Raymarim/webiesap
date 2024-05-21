export function seo(data = { title : ''}) {
  // data.title = data.tile || 'Title';
  
  document.title = data.title;
  document.querySelector('meta[name="description"]').setAttribute('content', data.descripcion);
}