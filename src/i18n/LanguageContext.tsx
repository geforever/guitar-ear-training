import React, { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'zh';

interface Translations {
    settings: string;
    selectKey: string;
    selectChords: string;
    startPractice: string;
    stopPractice: string;
    backToSettings: string;
    key: string;
    replayChord: string;
    replay: string;
    next: string;
    correct: string;
    incorrect: string;
    tryAgain: string;
    pressStart: string;
    title: string;
    subtitle: string;
    useHeadphones: string;
    selectAll: string;
    selectSome: string;
    selectNone: string;
    minSelection: string;
    chordLibrary: string;
    metaDescription: string;
    metaKeywords: string;
}

const translations: Record<Language, Translations> = {
    en: {
        settings: 'Settings',
        selectKey: 'Select Key',
        selectChords: 'Select Chords & Voicings',
        startPractice: 'Start Practice',
        stopPractice: 'Stop Practice',
        backToSettings: 'Back to Settings',
        key: 'Key',
        replayChord: 'Replay Chord',
        replay: 'Replay Sound',
        next: 'Next',
        correct: 'Correct! 🎉',
        incorrect: 'Try Again! ❌',
        tryAgain: 'Try Again!',
        pressStart: 'Press Start to begin!',
        title: 'Guitar Ear Trainer',
        subtitle: 'Select your settings in the drawer and click Start Practice.',
        useHeadphones: 'Use headphones for best experience 🎧',
        selectAll: 'All',
        selectSome: 'Some',
        selectNone: 'Clear',
        minSelection: 'Select at least 2 voicings.',
        chordLibrary: 'Chord Library',
        metaDescription: 'Master your guitar ear training with our interactive tool. Practice identifying chords and voicings in any key.',
        metaKeywords: 'guitar, ear training, chords, voicings, music education, guitar practice',
    },
    zh: {
        settings: '设置',
        selectKey: '选择调号',
        selectChords: '选择和弦与指法',
        startPractice: '开始练习',
        stopPractice: '停止练习',
        backToSettings: '返回设置',
        key: '调号',
        replayChord: '重播和弦',
        replay: '重播声音', // Added this line
        next: '下一题',
        correct: '回答正确! 🎉',
        incorrect: '回答错误! ❌',
        tryAgain: '请重试!',
        pressStart: '点击开始练习!',
        title: '吉他听音训练',
        subtitle: '请在右侧设置中选择练习内容，然后点击开始练习。',
        useHeadphones: '佩戴耳机体验更佳 🎧',
        selectAll: '全选',
        selectSome: '部分',
        selectNone: '清空',
        minSelection: '请至少选择 2 个指法。',
        chordLibrary: '和弦库',
        metaDescription: '通过我们的交互式工具提升您的吉他听音能力。练习识别任何调号中的和弦及其指法。',
        metaKeywords: '吉他, 听音训练, 和弦, 指法, 音乐教育, 吉他练习',
    }
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('zh'); // Default to Chinese as per user request context

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
