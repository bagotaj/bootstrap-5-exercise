const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const linkedinEl = document.getElementById('linkedinTooltip');
const tooltip1 = new bootstrap.Tooltip(linkedinEl);

const twitterEl = document.getElementById('twitterTooltip');
const tooltip2 = new bootstrap.Tooltip(twitterEl);

const facebookEl = document.getElementById('facebookTooltip');
const tooltip3 = new bootstrap.Tooltip(facebookEl);
