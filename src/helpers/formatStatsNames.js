export const formatStatsNames = (stat = '') => {
  let formattedStat = stat.replace('special-', 'Sp ');
  formattedStat = formattedStat
                    .split(' ')
                    .map(word => word[0].toUpperCase() + word.slice(1))
                    .join(' ');
  return formattedStat;
}