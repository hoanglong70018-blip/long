```javascript
import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, Palette } from 'lucide-react';


const FeaturesGrid: React.FC = () => {
    return (
        <section className="features-split py-24 bg-dark-primary" id="features">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Veo 3 Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="feature-card veo3 group"
                    >
                        <Clapperboard className="w-12 h-12 text-mid-gray mb-6 stroke-[1.5]" />
                        <div className="text-xs font-bold tracking-widest text-mid-gray uppercase mb-2">VEO 3</div>
                        <h3 className="text-3xl font-heading font-bold mb-4 text-white group-hover:text-orange-accent transition-colors">
                            Video Generation <br /> Không Giới Hạn
                        </h3>
                        <p className="text-lg text-mid-gray mb-8 font-body leading-relaxed">
                            AI model mạnh nhất từ Google DeepMind. <br />
                            Tạo video chất lượng Hollywood chỉ từ text prompt.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "4K resolution, 60fps",
                                "Cinematography-grade lighting",
                                "Multi-shot sequences",
                                "Vietnamese prompt support"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-orange-accent/10 flex items-center justify-center text-orange-accent text-xs">✓</div>
                                    <span className="text-white font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Nano Banana Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="feature-card nanobana group"
                    >
                        <Palette className="w-12 h-12 text-mid-gray mb-6 stroke-[1.5]" />
                        <div className="text-xs font-bold tracking-widest text-mid-gray uppercase mb-2">NANO BANANA PRO</div>
                        <h3 className="text-3xl font-heading font-bold mb-4 text-white group-hover:text-blue-accent transition-colors">
                            3D Visual Design <br /> Tự Động Hóa
                        </h3>
                        <p className="text-lg text-mid-gray mb-8 font-body leading-relaxed">
                            Style signature của LongBest: 3D minimalist, high-tech, <br />
                            pop-color backgrounds hoàn hảo cho social media.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "3D minimalist aesthetic",
                                "Custom color palettes",
                                "Carousel-ready layouts",
                                "Brand consistency automation"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent text-xs">✓</div>
                                    <span className="text-white font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default FeaturesGrid;
                            3D Visual Design <br /> Tự Động Hóa
                        </h3>
                        <p className="text-lg text-mid-gray mb-8 font-body leading-relaxed">
                            Style signature của LongBest: 3D minimalist, high-tech, <br />
                            pop-color backgrounds hoàn hảo cho social media.