'use client'
import React, { FC } from 'react';
import styles from './styles.module.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Title from '@/components/Title';
import Swiper from '@/components/Swiper';
import { useImages } from '@/hooks/useImages';

const GuruMaharajPage: FC = () => {
  const { images: swiperNaraharinath, loadMore, hasMore } = useImages('Naraharinath');
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Title mainTitle='Guru Yogi Naraharinath Maharaj' />
        <Swiper properties={swiperNaraharinath} loadMore={loadMore} hasMore={hasMore} />
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Yogi Narharinath was born on Sunday 17th Falgun, 1971 as the son of Lalit Singh Riksen Thapa and Mata Gauridevi (Atreya Gotri) of Bharadwaj Gotri of Lalulokhada, Chakha, Lalugaon, Kalikot District, then Thanticot Village Development Committee, Ward No. 7. Balbirsingh Riksen Thapa, who was ordained at the age of eight, changed his name to Yogi Narharinath only after he retired from Mahant Chhipranath Yogi of Jumla Chandannath Temple in 1981 BS.
          </p>
          <p className={styles.text}>
            At the age of nine, Yogi Narharinath entered the Vatukbhairavanath Siddha Chandannath Bhasha Pathshala in Jumla, Chaughan. After that, he studied holistic grammar, philosophy, and poetic literature in Haridwar, Mayapuri yoga work. In the year 1992/93 BS, he studied Siddhantakaumudi, Mahabhasya Prathamanhika, and Vakyapadiya Brahmakanda in Varanasi, Gorakhtilla, Maidagini.
          </p>
          <p className={styles.text}>
            Studied Kavyaprakash, Kadambari Purvraddha, and other philosophies at Prachya Vidyapeeth, Lahore. In 1995 BS, he passed Shastri from Saraswati Sanskrit College, Ludhiana, and in 1997 BS from Gurukul Kandi University, Haridwar, he studied Rigveda, Yajurveda, Samaveda, Atharvaveda, Shatapatha Brahmin, Taitiriya Brahmin, Aitareya Brahmin, Tandya Brahmin, Gopath Brahmin and passed the Vedalankara examination.
          </p>
          <p className={styles.text}>
            After completing his studies, he joined the 'Prohibition of Cow Slaughter Movement' and India's Freedom Struggle Satyagraha. During this time, he was repeatedly imprisoned in Lahore's Maltan, Sindh, Punjab, Delhi and Calcutta jails. After the formation of a democratic government in India, he returned to Nepal saying 'I love my own country and my own soil', rejecting the Indian government's copper sheet, freedom fighter lifestyle and labor that it wanted to provide on Indian land. Yogi Narharinath started living permanently in Mrigasthali from 20th Kartik 2004.
          </p>
          <p className={styles.text}>
            Shri 3 Juddha Shamsher, who preferred the company of Sadhusant at that time, made a donation of 10,000 cows to Yogi Naraharinath in Pashupati. That was his whole life.
          </p>
          <p className={styles.text}>
            He was appointed as the Pir Mahant of Gorakhnath Math from Poush 4th, 2004 BS with state honors by the then Prime Minister Shri 3 Mohan Shamsher. Yogi remained as Mahanta till the 1st of Poush, 2018 BS.
          </p>
          <p className={styles.text}>
            Although Mahant Yogi of Gorakhnath Math was Naraharinath, due to his busy schedule, he handed over the responsibility of all the work to be done as a Mahant to his Guru Chhipranath Yogi. On the 9th of 2044 Poush, Yogi Chhipranath passed away and that responsibility was given to Ramnath Yogi.
          </p>
          <p className={styles.text}>
            Then from Chaitra 1, 2045, that responsibility was given to Tika Nath Yogi. Rupnath Yogi was given the responsibility of Pir Mahant of Gorakhnath Math from 1st July 2046 after receiving an invitation from Mumbai to stay there. Yogi Srishanath, a disciple of Yogi Naraharinath, is currently the chief abbot of Gorkhanath Math.
          </p>
          <p className={styles.text}>
            Rashtraguru Yogi Naraharinath is a Shastri, Veda Vidyalayankara:, Asukawi, Dharmashastracharya:, Archaeologist, History writer and publisher, Knowledge of many languages, 45 Lakshoms 129 Kotihomes and 5 Shivayagyakarta, cow devotee, lifelong student, lifelong hiker, lifelong yoga practitioner, lifelong volunteer , life-long philanthropy, world peace-welfare, celibate, centenarian pilgrim, Bharadwaj gotriya sage, Hindu national guru, botanist, millenary-book author and publisher, founder of Brihadadhyatmika Parishad, founder of religious-cultural national literary organization, founder of Vishwa Hindu Federation, Panchabhasha University Proposer is also known as adjective.
          </p>
          <p className={styles.text}>
            Yogi Narharinath established Karmaveer Mahamandal, Itishas Prakash Sangh, Aryaveer Sangh, Brihat Spiritual Council, Nepali Folk Literature Council, Sanskrit Literature Council, Arsha Vidya Shodh Kendra, various Kotihome Committees. During his lifetime, Yogi published a total of 571 books (including 176 unpublished books) including 114 books on Goraksha Granthmala, 8 books on history and archeology, 10 bi-weekly/monthly/quarterly magazines, and 263 books on various other subjects. .
          </p>
          <p className={styles.text}>
            Among the works composed by him are some parts of Anyokti Muktavali, 75 parts out of 82 parts of Sandhipatra Collection in Itihasa Prakash, 78 parts out of 82 parts of Itihasa Prakash, 14 parts out of 15 parts of Shikharini Yatra, records, about 600 Thara Gotra genealogies, Avatar Vibhuti Phala introduction, Manusmriti Padyamaya. It seems that 176 books, including 74 parts of Tika and Kotihome introduction, are yet to be published.
          </p>
          <p className={styles.text}>
            He edited and operated magazines such as Sanskrit Sandesh (Archives), Jayatu Sanskritam (Language, Literature), Purushartha (Religion), Karmaveer Sandesh, Himavatsanskrit (Culture and History), Vishwatmdarshan, Sarayusandesh, Nathvani, Gram Garima, Nath Sandesh and Sanskritamrit.
          </p>
          <p className={styles.text}>
            Yogi's Patriotism:
          </p>
          <p className={styles.text}>
            Yogi was also very careful about the issue of national independence. He filed a writ petition against the decision of the immediate government of Nepal to grant 42 bigha of land within the cultural, archeological and religious area of ​​Nepal to the north of Narayangadh market, Chitwan District, for free to the West Virginia University of India and the United States of America for the establishment of a medical science study center. . On the basis of the same writ petition, the decision of the Government of Nepal was annulled by the order of expulsion issued by the Supreme Court on 17th Baisakh of the year 2052. At that place now 'Yogi Narharinath Natural Hospital', Gaushala, Gurukul etc. are being operated.
          </p>
          <p className={styles.text}>
            In the same way, the status of the Nepali territory before the Sugauli Treaty was restored and the territory of the Dominion of Nepal was established in accordance with Article 4, Clause 2 (b) of the Constitution of the Dominion of Nepal-2047. A writ was filed in the Supreme Court by Yogi Narharinath, Prahlad Humagai, Prakashraj Devkota, Ashoklal Shrestha and advocates Ramji Bishta, Shyam Prasad Dhungel and Radheshyam Lekali in the Supreme Court on 31st Ashad 2054 to get full justice for the case.
          </p>
          <p className={styles.text}>
            Calamities that befell a Yogi:
          </p>
          <p className={styles.text}>
            The current political society considers Yogi Naraharinath to be a supporter of monarchism or panchayat, while the immediate panchayat system used to trouble him by accusing him of un-national elements, etc. Among such incidents, the 'Gorkha incident' of Kartik 9th, 2017 is a well-known incident. In the anger of this incident, there are still those who remember that smoke rose up in the Mrigasthali forest area for seven days when all the belongings of Yogi Narharinath and sacks of historical materials were set on fire by the immediate government. Yogi went into exile in India after being detained by the panchayat government from 18th Shrawan to 1st Magha 2033. Panchayat people gave him water mixed with glass dust with the intention of taking his life, and he became unconscious for a long time.
          </p>
          <p className={styles.text}>
            Yogi Narharinath passed away at the age of 88 years on Tuesday 13th Falgun 2059 at 12:40 PM at Mrigasthali Ashram.
          </p>
          <p className={styles.text}>
            After he became a brahmin, the Guthi Sansthan of the Government of Nepal locked Yogi Narharinath Aa Shram. Guthi Sansthan did not listen even when we asked for permission to open the lock and promote the preservation of Yogi's unpublished documents, treat medicine, and publish. The Guthi Sansthan was repeatedly confused and cheated. Sometimes they asked for proof of authority, sometimes they asked for the recommendation of Pashupati Guthi. In this way, the badness of the Guthi Sansthan, which we did not protect and did not allow others to protect, led to the loss of important assets of the society and the nation.
          </p>
          <p className={styles.text}>
            Even till the last moment of his life, Yogi was worried about the nation and the nation. The whole life of Yogi Naraharinath was spent in the service of the motherland, patriotism, Nepal, and the revival of the original language and original culture of Nepal. The works created by him are a priceless asset for society, nation, and the global human family. The organization named 'Sribrihat Spiritual Council' established by him on 1st Chaitra 2022 has preserved his material in the underworld and started the 'Yogi Narharinath Memorial Library and Museum'. In this library and museum, about 359 books/booklets and newspapers written and published by Yogi, including materials used by Yogi Narharinath during his lifetime, have been preserved.
          </p>
          <p className={styles.text}>
            Yogi in Vedic work:
          </p>
          <p className={styles.text}>
            Yogi Narharinath started doing Kotihomes from Galeshwar Baba Ashram, Devghat, Tanahun on the day of 2038 Magheskranti and completed 129 Kotihomes, 45 Lakshya Homes and five Shivayagynas. He educated the human society about Vedic Sanatan philosophy, Vedas, Gayatri, Sanskrit language and the importance of cows through Kotihome Yagna etc. He utilized the financial support collected through Kotihome itself to establish Gurukuls. He started a spiritual revolution in Vedic philosophy. He explained the teachings of the Vedas and Upanishads in a simple and easy manner. He highlighted the importance of conservation of earth, water, fire, air and nature. As Sanskrit language is the mother tongue of all other languages, he took the initiative to establish 'Nepal Sanskrit University' in Beljhundi, Dang and 'Sarayu Sanskrit University' in Girijapuri, India, emphasizing the importance of Sanskrit education and preservation of Sanskrit language.
          </p>
          <p className={styles.text}>
            Yogi Narharinath, who dedicated his life for the entire nation, nationality and human society, seems to have been forgotten or ignored by the nation and the Nepalese society. Yogi Pandits from other countries are honored and worshiped in Nepal, but Nepal's National Guru Yogi Naraharinath and his works and gifts are neglected. The culture, art, language, literature, history and archeology from Mechi to Mahakali collected through the hard work and efforts of yogis were locked away in the rooms of the very dilapidated building in Mrigasthali to rot, melt and dissolve into dust.
          </p>
          <p className={styles.text}>
            No one wanted to listen or do anything about Yogi Narharinath, despite repeated requests to the related agencies that the property of the nation should be saved. How could the self-respecting Nepali society rise up when the important historical evidences of the real identity of Nepal and Nepalese turned into mud? Since Yogi Narharinath's discovery and research is an important asset for the nation, saving it is the main responsibility of the present human society.
          </p>
          <p className={styles.text}>
            Yogi Narharinath Ashram at Mrigasthali was very dilapidated. The aftershocks of the earthquake that occurred on 12th and 29th of Baisakh 2072 were continuous. There was a fear that due to the aftershocks of the earthquake, the dilapidated building would collapse and all the collections of Yogi Narharinath would be buried in the rubble.
          </p>
          <p className={styles.text}>
            The materials collected by Yogi Narharinath with great difficulty were set on fire by the government in 2017, some of the materials were burnt in Singha Durbar in 2028. Now, even though we tried to save the materials that were left in the desert and labor, we could not get the support of the government.
          </p>
          <p className={styles.text}>
            On Monday 15th Chaitra, 2072, at around 4 pm, the wind and storm that came to Kathmandu Valley blew away the tin roof of Rashtraguru Yogi Narharinath Aa Shram located in Gorakshapeeth, Mrigasthali on the north side. At the same time, if it rains, there is a possibility that all the materials collected there by Rashtraguru Yogi Narharinath will be destroyed. Even in such a situation, there was no presence of Guthi Sansthan at this place. Due to natural calamities, it was difficult to keep the valuable contribution made by national leader Yogi Narharinath safe for the sake of the nation. Even when many materials were damaged, no help was received from anywhere. From the next day onwards, the process of selecting all those materials was started.
          </p>
          <p className={styles.text}>
            After cataloging all the transferred materials, efforts were made to secure them by re-managing them and taking necessary medication. Efforts have been made to preserve the materials that the council can keep in the 'Yogi Nararinath: Memorial Library and Museum' for the welfare of all the researchers, researchers, teachers, students and the curious public.
          </p>
          <p className={styles.text}>
            Before 2007, there was no learning environment in Nepal. Readers should not be ignorant of the fact that those who read and studied were educated in foreign lands. The East-West Lokmarg, Muglin-Narayangadh / Hetaida-Kathmandu route or roads connecting other districts of the country were not built. Air transport was not available everywhere. On top of that, there was a situation where it was impossible to enter the Terai province due to the fear of malaria. In such a situation, the audacity to face uphill, downhill, river channels, jungles, violent wild animals, lowland heat, hail and malaria was unimaginable.
          </p>
          <p className={styles.text}>
            Even for foreign scholars who study and research Nepal under government hospitality, it was not possible to study and research Nepal as a whole due to Nepal's geographical difficulty and lack of educational awareness. In the current environment, it was not possible for the native scholars in the capital to go beyond Thankot to study and research. The field of study of all the researchers, native and foreign, was narrowed within the valley itself. Due to this situation of the country, extensive study and research could be done inside the Kathmandu Valley, but outside it was not possible at all. Therefore, the external history has not yet been completed. When the country is in this state, there is no evidence that any Nepalese scholar has the courage to explore the country for the purpose of studying and researching history, culture and archeology. Even in such a situation, Yogi's fearless steps did not stop.
          </p>
          <p className={styles.text}>
            There is no doubt that only Yogi Narharinath did the work of collecting historical and archeological materials from the villages and carrying them to Kathmandu with a bag on his shoulder. Yogi settled in Kathmandu and founded 'Itihas Prakash Mandal', which was led by Historian Shiromani Baburam Acharya, who studied, researched, explained and published. Diss. While writing the background of the 24-page Sandhipatra collection published on the day of 2021 Indra Jatra, Yogi Narharinath said, 'Janantu Surve Jana', 63 parts of historical materials of seven provinces and 14 zones of the Gorkha nation have been collected for 25 years and 15 to 20 thousand pieces of historical materials from Tista, Kangra, Ganga and Digarcha have been collected. mentioned.
          </p>
          <p className={styles.text}>
            Yogi Narharinath dared to love the country despite Nepal's geographical difficulty, lack of transportation means and malaria epidemic. Yogi, who kept asking for historical evidence saying 'Alakh Niranjan, Bhiksham Dehi', wandered in search of the original history and original culture of Nepal. That's why even now in some places Yogi is also called the scholar of history, Himanav.
          </p>
          <p className={styles.text}>
            Yogi Narharinath was imprisoned in the Central Jail from 18th Shrawan 2033 to 1st Magha 2033 by the Panchayat government on various charges. Even while in prison, he wrote Spiritual Nepal and God Country Himalayas, Spiritual India and God Country Nepal, Introduction to Avatar Vibhuti Sthal, Vishwa Hindu Dharma Sammelan, Pashupatimatam (prose translation of Shiva Dharma Mahasastra), Anyokti Muktavali, Devata Tirthamala and some parts of Itihasa Prakash.
          </p>
          <p className={styles.text}>
            (Writer Vishwa Pokharel is the Secretary General of Sri Brihat Adhyatmik Parishad, Mrigasthali.)
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GuruMaharajPage;