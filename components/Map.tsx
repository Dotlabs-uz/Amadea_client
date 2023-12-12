interface MapProps {
   location: string;
}

const Map: React.FC<MapProps> = ({ location }) => {
   return (
      <div id="map" className="">
         <iframe
            className="w-full h-96"
            src={
               "https://yandex.uz/maps/10330/bukhara/?ll=64.434057%2C39.772853&mode=whatshere&whatshere%5Bpoint%5D=64.433925%2C39.772874&whatshere%5Bzoom%5D=17.683895&z=17"
            }
         ></iframe>
      </div>
   );
};

export default Map;
