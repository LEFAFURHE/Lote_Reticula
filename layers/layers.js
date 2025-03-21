ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:21818").setExtent([389080.138385, 1033946.921135, 389832.239852, 1034337.868564]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Colindantes_1 = new ol.format.GeoJSON();
var features_Colindantes_1 = format_Colindantes_1.readFeatures(json_Colindantes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Colindantes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colindantes_1.addFeatures(features_Colindantes_1);
var lyr_Colindantes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colindantes_1, 
                style: style_Colindantes_1,
                popuplayertitle: 'Colindantes',
                interactive: true,
                title: '<img src="styles/legend/Colindantes_1.png" /> Colindantes'
            });
var format_Lotes_Angosto_2 = new ol.format.GeoJSON();
var features_Lotes_Angosto_2 = format_Lotes_Angosto_2.readFeatures(json_Lotes_Angosto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Lotes_Angosto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_Angosto_2.addFeatures(features_Lotes_Angosto_2);
var lyr_Lotes_Angosto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_Angosto_2, 
                style: style_Lotes_Angosto_2,
                popuplayertitle: 'Lotes_Angosto',
                interactive: true,
                title: '<img src="styles/legend/Lotes_Angosto_2.png" /> Lotes_Angosto'
            });
var format_Predio_3 = new ol.format.GeoJSON();
var features_Predio_3 = format_Predio_3.readFeatures(json_Predio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Predio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predio_3.addFeatures(features_Predio_3);
var lyr_Predio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predio_3, 
                style: style_Predio_3,
                popuplayertitle: 'Predio',
                interactive: false,
                title: '<img src="styles/legend/Predio_3.png" /> Predio'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Colindantes_1.setVisible(true);lyr_Lotes_Angosto_2.setVisible(true);lyr_Predio_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Colindantes_1,lyr_Lotes_Angosto_2,lyr_Predio_3];
lyr_Colindantes_1.set('fieldAliases', {'id': 'id', });
lyr_Lotes_Angosto_2.set('fieldAliases', {'id': 'id', 'Área': 'Área', });
lyr_Predio_3.set('fieldAliases', {'id': 'id', 'Área': 'Área', });
lyr_Colindantes_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Lotes_Angosto_2.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', });
lyr_Predio_3.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', });
lyr_Colindantes_1.set('fieldLabels', {'id': 'hidden field', });
lyr_Lotes_Angosto_2.set('fieldLabels', {'id': 'inline label - always visible', 'Área': 'inline label - always visible', });
lyr_Predio_3.set('fieldLabels', {'id': 'hidden field', 'Área': 'hidden field', });
lyr_Predio_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});