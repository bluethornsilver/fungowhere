import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {places} from './data.js';
import {venuePhotos} from './venue-photos.js';
import {venueInfo} from './venue-info.js';

test('Venue photo records match catalogue IDs and have local JPEG assets and reusable attribution',()=>{
 const ids=new Set(places.map(p=>p.id));
 for(const [id,record] of Object.entries(venuePhotos)){
  assert.ok(ids.has(id),id);
  for(const v of [record,...(record.gallery||[])]){
   for(const field of ['photo','alt','credit','license','licenseUrl','photoSource','photoDate','changes'])assert.ok(typeof v[field]==='string'&&v[field].trim(),id+': '+field);
   assert.match(v.photo,/^\/places\/venues\/[a-z0-9-]+\.jpg$/);
   assert.match(v.license,/^(CC BY(?:-SA)? [234]\.0|Public domain|CC0)/i);
   assert.match(v.photoSource,/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
   assert.match(v.licenseUrl,/^https:\/\//);
   assert.ok(v.credit.length<180,'Name-only attribution: '+id);
   const path=new URL('./public'+v.photo,import.meta.url);
   assert.ok(existsSync(path),v.photo);
   const bytes=readFileSync(path);assert.ok(bytes.length>10000);assert.equal(bytes[0],255);assert.equal(bytes[1],216);
  }
 }
});
test('Named Gardens attractions use distinct photos and galleries preserve source metadata',()=>{
 const ids=['supertree-grove','cloud-forest','flower-dome','jurong-lake-gardens','chinese-japanese-gardens','national-orchid-garden'];
 assert.equal(new Set(ids.map(id=>venuePhotos[id]?.photo)).size,ids.length);
 for(const id of ids)assert.ok(venuePhotos[id]?.photo,id);
 for(const id of ['cloud-forest','jurong-lake-gardens','national-orchid-garden'])assert.ok(venuePhotos[id].gallery.length);
});
test('Photo research does not mark practical venue information as verified',()=>{
 assert.equal(Object.keys(venueInfo).length,3);
 for(const v of Object.values(venuePhotos))for(const key of ['checked','hours','admissionVerified','booking','access'])assert.equal(v[key],undefined);
});
