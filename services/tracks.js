//import knex from '../../database'

const getTrackCount = async () => {
    (await knex('track').count())[0].count;
}
const selectColumns = [
    't.trackid', 't.trackname', 't.trackreleasedate', 't.tracknumstreamings',
    'a.artistname', 'a.artistlabels'
]   
/*
export const getRandomTrack = async ()=>{
    const count = await getTrackCount();
    return knex('track as t')
    .select(selectColumns)
    .join('artist as a', 'a.artistid')
    .offset(knex.raw(`floor(random() * ${count}`))
    .limit(1);
}

export const addTrack = async (track) =>{
    const [trackid] = await knex('track')
    .insert(track)
    .returning('id');
}*/