import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({ locations, height = "400px", center = [20.5937, 78.9629], zoom = 5 }) => {
    return (
        <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg" style={{ height }}>
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="OpenStreetMap">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>

                    {/* Main Location Markers */}
                    <LayersControl.Overlay checked name="Locations">
                        <LayerGroup>
                            {locations.map((loc) => (
                                <Marker key={loc.id} position={loc.coordinates}>
                                    <Popup>
                                        <div className="p-1">
                                            <h3 className="font-bold text-gray-900">{loc.name}</h3>
                                            <p className="text-sm text-gray-600">{loc.city}</p>
                                            <div className="mt-2 flex items-center justify-between">
                                                <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                    Score: {loc.communityScore}
                                                </span>
                                                <Link to={`/location/${loc.id}`} className="text-xs text-blue-600 hover:underline">
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </LayerGroup>
                    </LayersControl.Overlay>

                    {/* Amenities Layers - Only render if single location view (has amenities data) */}
                    {locations.length === 1 && locations[0].amenities && (
                        <>
                            <LayersControl.Overlay name="Hospitals">
                                <LayerGroup>
                                    {locations[0].amenities.hospitals.map((h, i) => (
                                        <Marker key={i} position={[h.lat, h.lng]} icon={L.divIcon({ className: 'bg-red-500 rounded-full w-4 h-4 border-2 border-white', iconSize: [16, 16] })}>
                                            <Popup>{h.name}</Popup>
                                        </Marker>
                                    ))}
                                </LayerGroup>
                            </LayersControl.Overlay>

                            <LayersControl.Overlay name="Schools">
                                <LayerGroup>
                                    {locations[0].amenities.schools.map((s, i) => (
                                        <Marker key={i} position={[s.lat, s.lng]} icon={L.divIcon({ className: 'bg-yellow-500 rounded-full w-4 h-4 border-2 border-white', iconSize: [16, 16] })}>
                                            <Popup>{s.name}</Popup>
                                        </Marker>
                                    ))}
                                </LayerGroup>
                            </LayersControl.Overlay>

                            <LayersControl.Overlay name="Police Stations">
                                <LayerGroup>
                                    {locations[0].amenities.police.map((p, i) => (
                                        <Marker key={i} position={[p.lat, p.lng]} icon={L.divIcon({ className: 'bg-blue-800 rounded-full w-4 h-4 border-2 border-white', iconSize: [16, 16] })}>
                                            <Popup>{p.name}</Popup>
                                        </Marker>
                                    ))}
                                </LayerGroup>
                            </LayersControl.Overlay>

                            <LayersControl.Overlay name="Malls & Markets">
                                <LayerGroup>
                                    {locations[0].amenities.malls.map((m, i) => (
                                        <Marker key={i} position={[m.lat, m.lng]} icon={L.divIcon({ className: 'bg-purple-500 rounded-full w-4 h-4 border-2 border-white', iconSize: [16, 16] })}>
                                            <Popup>{m.name}</Popup>
                                        </Marker>
                                    ))}
                                </LayerGroup>
                            </LayersControl.Overlay>
                        </>
                    )}
                </LayersControl>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
