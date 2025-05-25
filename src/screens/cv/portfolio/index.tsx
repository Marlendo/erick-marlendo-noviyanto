import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Title } from "#/components/headers";
import { IPortfilioList, portfolioService } from "#/services/portfolio";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import 'react-photo-view/dist/react-photo-view.css';

function Portfolio() {
  const images: IPortfilioList[] = portfolioService() as any;
  const [state, setState] = useState<IPortfilioList[]>(images);
  const [preview, setPreview] = useState<IPortfilioList | null>(null);

  function filterImages(type: 'Show All' | 'Mobile Apps' | 'Web Apps') {
    if (type === 'Mobile Apps') {
      const filteredImages = images.filter((item) => item.type === 'mobile apps');
      return setState(filteredImages);
    }
    if (type === 'Web Apps') {
      const filteredImages = images.filter((item) => item.type === 'web apps');
      return setState(filteredImages);
    }
    setState(images);
  }

  return (
    <PhotoProvider>
      <div className=" min-h-[100vh]">
        <Title title="Portfolio" subtitle="03" tabs={['Show All', 'Mobile Apps', 'Web Apps']} tabsOnChange={(value: any) => {
          filterImages(value);
        }} />
        <div className="grid grid-cols-3 gap-4">
          <AnimatePresence>
            {
              state.map((item, index) => (
                <PhotoView src={item.image} key={`${item.title}-${index}`}>
                  <motion.div
                    className="cursor-pointer relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => {
                      if (!preview) {
                        setPreview(item);
                      }
                    }}
                    onMouseLeave={() => {
                      if (preview) {
                        setPreview(null);
                      }
                    }}
                  >
                    {
                      preview?.title === item.title ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 0.9, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="bg-teal-900 absolute w-full h-full flex flex-col justify-center items-center"
                        >
                          <h1 className="font-bold text-xl text-center text-white">{item.title}</h1>
                          <p className="font-light italic text-white">{item.type}</p>
                        </motion.div>
                      ) : null
                    }

                    <img src={item.image} alt={`${item.title}-#${index}`} />
                  </motion.div>
                </PhotoView>
              ))
            }
          </AnimatePresence>
        </div>
      </div>
    </PhotoProvider>
  );
}

export default Portfolio;
