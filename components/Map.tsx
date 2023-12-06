interface MapProps {
   location: string;
}

const Map: React.FC<MapProps> = ({ location }) => {
   return (
      <div id="map" className="">
         <iframe
            className="w-full h-96"
            src={`https://yandex.uz/map-widget/v1/?ll=${location}`}
         ></iframe>
      </div>
   );
};

export default Map;
