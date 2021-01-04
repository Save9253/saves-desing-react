import React from 'react';
import colors from '../colors.js'

const {black,mdGreen,ltGreen} = colors 

export function Logo(props){
    return(
        <svg style={{placeSelf: 'center'}} role="img" height={props.height} viewBox="0 0 165 202" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M97 2L2 129L11 146L62 200L163 139L145 62L136 45L74 120L106 18L97 2Z" fill={mdGreen} stroke={black} strokeWidth="1"/>
            <path d="M41 16L2 129L50 180L151 118L136 45L64 103L97 2L41 16Z" fill={ltGreen}/>
            <path d="M97 2L41 16L2 129L11 146L62 200L163 139L145 62L136 45L84 87L106 18L97 2Z" stroke={black} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
export function Cart(props){
    return(
        <svg style={{placeSelf: 'center'}} role="img" height={props.height} viewBox="0 0 184 171" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M115 104L125 135" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke={black}/>
            <g fill={ltGreen}>
                <path d="M131 116H39L19 55L152 55L131 116Z"/>
                <path d="M2 43L19 55H152L135 43L2 43Z"/>
            </g>
            <path d="M2 43L23 104L39 116L19 55L152 55L148 53L134 52L135 43L133 43L132 52L15 52L2 43Z" fill={mdGreen}/>
            <g strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke={black}>
                <path d="M135 43L145 12L166 2L182 14L162 24L152 55" />
                <path d="M134 76H36" stroke={mdGreen}/>
                <path d="M127 96H43" stroke={mdGreen}/>
                <path d="M131 116L141 147"/>
                <path d="M2 43L23 104L39 116H131L152 55L135 43L2 43Z"/>
                <g fill={mdGreen}>
                    <path d="M128 154L120 157L112 154L109 146L112 138L120 135L128 138L131 146L128 154Z"  />
                    <path d="M48 154L40 157L32 154L29 146L32 138L40 135L48 138L51 146L48 154Z" />
                    <path d="M49 147L33 135L125 135L141 147L49 147Z"/>
                </g >
                <g fill={ltGreen}>
                    <path d="M144 166L136 169L128 166L125 158L128 150L136 147L144 150L147 158L144 166Z" />
                    <path d="M64 166L56 169L48 166L45 158L48 150L56 147L64 150L67 158L64 166Z"/>
                </g>
            </g>
        </svg>
    )
}
export function Home(props){
    return(
        <svg style={{placeSelf: 'center'}} role="img" height={props.height} viewBox="0 0 204 154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill={ltGreen} stroke={black} strokeWidth="3" strokeLinejoin="round">
                <path d="M202 2H2V32H202V2Z" />
                <path d="M202 32H2V152H202V32Z"/>
            </g>
            <path d="M25 22L19 25L14 22L12 17L14 12L19 9L25 12L27 17L25 22Z" fill={black}/>
            <g fill={mdGreen}>
                <path d="M191 19L189 20L186 19L185 17L186 15L189 14L191 15L192 17L191 19Z"/>
                <path d="M181 19L179 20L176 19L175 17L176 15L179 14L181 15L182 17L181 19Z"/>
                <path d="M171 19L169 20L166 19L165 17L166 15L169 14L171 15L172 17L171 19Z"/>
                <path d="M81 15H59V20H81V15Z" />
                <path d="M107 15H85V20H107V15Z"/>
                <path d="M133 15H111V20H133V15Z"/>
            </g>
            <path d="M102 47L57 82V87H67V132H137V87H147V82L102 47ZM90 87H100V97H90V87ZM105 87H115V97H105V87ZM90 102H100V112H90V102ZM105 102H115V112H105V102Z" fill={black}/>
        </svg>
    )
}
export function Blog(props){
    return(
        <svg style={{placeSelf: 'center'}} role="img" height={props.height} viewBox="0 0 163 179" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill={ltGreen}>
                <path d="M17 17L107 2L118 7L122 22V125L47 137L58 142L62 157L58 172L47 177L36 172L32 157V37L28 22L17 17Z"/>
                <path d="M47 137L137 122L148 127L152 142L148 157L137 162L47 177L58 172L62 157L58 142L47 137Z"/>
                <path d="M17 57L32 55V37L28 22L17 17L6 22L2 37L6 52L17 57Z"/>
            </g>
            <g fill={mdGreen}> 
                <path d="M62 157L58 142L47 137L57 143L58 158L33 162L36 172L47 177L58 172L62 157Z" />
                <path d="M17 17L6 22L8 37L16 50L29 55L32 55V37L28 22L17 17Z"/>
                <path d="M47 177L137 162L148 157L150 149L62 164L58 172L47 177Z"/>
                <path d="M122 125L47 137L49 135L122 122V125Z"/>
                <path d="M44 36L106 26V30L44 41V36Z"/>
                <path d="M44 45L88 38V42L44 49V45Z"/>
                <path d="M44 54L99 45V49L44 58V54Z"/>
                <path d="M75 103L81 74L89 62L89 77L92 58L104 45L125 30L125 40L130 27L141 22L161 18L160 37L148 59L140 58L145 62L130 76L122 76L127 79L109 91L77 104L75 103Z"/>
                <path d="M44 72L85 65L82 70L44 76V72Z"/>
                <path d="M44 81L79 75L79 79L44 85V81Z"/>
                <path d="M44 89L78 84L77 88L44 94V89Z"/>
                <path d="M44 98L76 93L75 97L44 103V98Z"/>
                <path d="M44 116L68 112L65 116L44 120V116Z"/>
                <path d="M44 107L74 102L71 107L44 111V107Z"/>
            </g>
            <path d="M65 118L75 103L90 85L116 57L143 35L118 58L92 86L77 104L71 113L65 118Z" fill={black}/>
            <path d="M107 2L17 17L6 22L2 37L6 52L17 57L32 55V157L36 172L47 177L137 162L148 157L152 142L148 127L137 122L122 125V82L128 79L122 76V75L130 76L145 62L140 58L149 59L161 37L161 17L142 21L131 27L125 40L125 29L122 32V22L118 7L107 2Z" stroke={black} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
export function Icon(props){
    return(
        <svg style={{placeSelf: 'center'}} role="img" height={props.height} viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M165 165L100 192L35 165L29 159L159 29L165 35L192 100L165 165Z" fill={mdGreen} />
            <path d="M157 157L92 184L29 159L2 94L29 29L94 2L159 29L184 92L157 157Z" fill={ltGreen}/>
            <path d="M119 156H68L80 141V92L68 74H120L110 95V139L119 156ZM110 60L94 65L80 60L75 45L80 30L96 25L110 30L114 45L110 60Z" fill={black}/>
            <path d="M94 2L29 29L2 94L29 159L35 165L100 192L165 165L192 100L165 35L159 29L94 2Z" stroke={black} strokeWidth="3" strokeLinejoin="round"/>
        </svg>
    )
}
export function Domain(props){
    return(
        <svg style={{placeSelf: 'center'}} role="img" height={props.height} viewBox="0 0 224 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 101L212 2L222 12V111H12L2 101Z" fill={mdGreen}/>
            <path d="M212 2H2V101H212V2Z" fill={ltGreen}/>
            <g fill={black}>
                <path d="M20 78V67H32V78H20Z" />
                <path d="M57 64L61 63L62 60H73L68 72L57 76H52L45 74L39 71L35 65L34 57V44L35 36L39 30L45 27L52 25H57L68 30L73 41H62L61 38L57 37H52L47 39L45 44V57L47 62L52 64H57Z"/>
                <path d="M98 25L106 27L112 30L116 36L117 44V57L116 65L112 71L106 74L98 76H94L86 74L81 71L77 65L76 57V44L77 36L81 30L86 27L94 25H98ZM94 37L89 39L87 44V57L89 62L94 64H98L103 62L106 57V44L103 39L98 37H94Z"/>
                <path d="M171 37L167 37L165 39L164 42L163 45V76H152V45L152 42L150 39L148 37L144 37H141L137 37L135 39L133 42L133 45V76H121V25H133V27L141 25H146L153 26L158 30L163 26L171 25H176L183 27L189 31L192 36L194 43V76H182V45L182 42L181 39L178 37L174 37H171Z"/>
            </g>
            <path d="M2 2V101L12 111H222V12L212 2H2Z" stroke={black} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
export function Ills(props){
    return(
        <svg style={{placeSelf: 'center'}} role="img" height={props.height} viewBox="0 0 199 149" fill="none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M197 2H2V147H197V2Z" fill={ltGreen} stroke={black} strokeWidth="3"/>
            <path d="M22 131H185L170 99L159 83L147 78L137 77L131 81L124 80L119 85L123 99L89 49L79 46L72 52L66 47L55 49L35 81L22 131Z" fill={black}/>
            <g fill={mdGreen}>
                <path d="M72 52L79 46L89 49L123 99L89 72L72 52Z" />
                <path d="M159 83L147 78L137 77L153 88L163 104L185 131L170 99L159 83Z"/>
            </g>
            <g stroke={black} strokeWidth="3">
                <path d="M55 49L72 31L89 49"  />
                <path d="M124 80L142 64L159 83"/>
                <path d="M106 25L103 35L109 49L122 54L136 49L143 35L136 20L124 15L115 19L109 34L115 44L122 47L132 42L136 36L131 27L125 24L120 26L118 34L123 40L128 36L127 32L124 32"/>
                <path d="M22 131H185L170 99L159 83L142 64L124 80L119 85L123 99L89 49L72 31L55 49L35 81L22 131Z"/>
            </g> 
        </svg>
    )
}
export function Sec(props){
    return(
        <svg style={{placeSelf: 'center'}} role="img" height={props.height} viewBox="0 0 205 104" fill={mdGreen} xmlns="http://www.w3.org/2000/svg">
            <path d="M202.9 15.5H2.4V88.2H202.9V15.5Z" fill={ltGreen} stroke={black} strokeWidth="3" strokeLinejoin="round"/>
            <path d="M118.8 7.9L115.7 9.2L112.6 7.9L111.3 4.8L112.6 1.7L115.7 0.4L118.8 1.7L120.1 4.8L118.8 7.9Z"/>
            <path d="M105.8 7.9L102.7 9.2L99.5 7.9L98.2 4.8L99.5 1.7L102.7 0.4L105.8 1.7L107.1 4.8L105.8 7.9Z"/>
            <path d="M92.7 7.9L89.6 9.2L86.5 7.9L85.2 4.8L86.5 1.7L89.6 0.4L92.7 1.7L94 4.8L92.7 7.9Z"/>
            <path d="M143.8 24.5H61.5V33.3H143.8V24.5Z" fill={black}/>
            <path d="M74.1 40.1H24.1V75.1H74.1V40.1Z"/>
            <path d="M181.2 40.1H80.1V45.1H181.2V40.1Z"/>
            <path d="M154.4 50.1H80.1V55.1H154.4V50.1Z"/>
            <path d="M163.7 60.1H80.1V65.1H163.7V60.1Z"/>
            <path d="M128.6 70.1H80.1V75.1H128.6V70.1Z"/>
            <path d="M118.8 102L115.7 103.3L112.6 102L111.3 98.9L112.6 95.7L115.7 94.4L118.8 95.7L120.1 98.9L118.8 102Z"/>
            <path d="M105.8 102L102.7 103.3L99.5 102L98.2 98.9L99.5 95.7L102.7 94.4L105.8 95.7L107.1 98.9L105.8 102Z"/>
            <path d="M92.7 102L89.6 103.3L86.5 102L85.2 98.9L86.5 95.7L89.6 94.4L92.7 95.7L94 98.9L92.7 102Z"/>
        </svg>
    )
}
export function Style(props){
    return(
        <svg style={{placeSelf: 'center'}} role="img" height={props.height} viewBox="0 0 225 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M199 24L104 11L79 21L67 36L70 55L57 64L33 68L35 119L39 123L84 134L157 129L215 96L223 59L202 28L199 24ZM123 28L132 37L126 48L106 54L91 54L82 46L89 34L105 28L123 28Z" fill={mdGreen}/>
            <path d="M100 7L75 16L63 32L67 51L64 52L8 38L3 39L6 43L54 59L53 60L29 64L17 87L35 119L80 130L151 123L212 90L219 58L199 24L155 8L100 7ZM119 24L128 33L123 43L103 50L87 50L79 41L86 30L101 24L119 24Z" fill={ltGreen}/>
            <g id='blob'>
                <path d="M168 41L156 43L144 39L140 31L145 24L157 22L169 26L174 34L168 41Z" fill={mdGreen}/>
                <path d="M144 39L156 43L168 41L174 34L169 26L173 34L167 39L156 41L144 39Z" fill={black}/>
                <path d="M142 31L147 26L157 24L148 27L142 31Z" fill={ltGreen}/>
            </g>
            <use href="#blob" transform='translate(31,20)'/>
            <use href="#blob" transform='translate(26,49)'/>
            <use href="#blob" transform='translate(-7,67)'/>
            <use href="#blob" transform='translate(-51,76)'/>
            <use href="#blob" transform='translate(-93,73)'/>
            <g fill={mdGreen}>
                <path d="M3 39L6 43L84 70L110 74L116 75L110 73L110 69L85 61L54 53L86 59L110 67L116 67L111 66L87 58L8 38L3 39Z"/>
                <path d="M116 67L126 66L138 75L144 76L139 79L121 78L116 75L116 67Z" />
                <path d="M28 66L27 68L84 75L110 77L116 77L121 79L139 79L144 78L138 77L126 74L116 74L111 74L87 71L28 66Z"/>
            </g>
            <path d="M60 62L84 70L110 74L116 75L121 78L139 79L144 76L139 78L121 78L116 74L82 69L60 62Z" fill={black}/>
            <path d="M100 7L75 16L63 32L67 51L64 52L8 38L3 39L6 43L54 59L53 60L29 64L17 87L35 119L39 123L84 134L157 129L215 96L223 59L202 28L199 24L155 8L100 7ZM123 28L128 33L123 43L103 50L87 50L83 45L89 34L105 28L123 28Z" stroke={black} strokeWidth="3"/>
        </svg>
    )
}
export function Form(props){
    return(
        <svg style={{placeSelf: 'center'}} role="img" height={props.height} viewBox="0 0 212 186" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M209.3 2.5H2.2V183.5H209.3V2.5Z" fill={ltGreen} stroke={black} strokeWidth="3.6" strokeLinejoin="round"/>
            <g fill={mdGreen}>
                <path d="M148.3 39.2H63.6V49.2H148.3V39.2Z"/>
                <path d="M135.2 69.2H63.5V79.2H135.2V69.2Z"/>
                <path d="M58.5 39.2H48.5V49.2H58.5V39.2Z"/>
                <path d="M164.5 54.2H63.6V64.2H164.5V54.2Z"/>
                <path d="M58.5 54.2H48.5V64.2H58.5V54.2Z"/>
                <path d="M142 99.8H62V109.8H142V99.8Z"/>
                <path d="M157 114.8H62V124.8H157V114.8Z"/>
                <path d="M133.6 129.8H62V139.8H133.6V129.8Z"/>
                <path d="M58.5 69.2H48.5V79.2H58.5V69.2Z" />
                <path d="M55.5 108.4L52 109.8L48.4 108.4L47 104.8L48.4 101.3L52 99.8L55.5 101.3L57 104.8L55.5 108.4Z"/>
                <path d="M55.5 123.4L52 124.8L48.4 123.4L47 119.8L48.4 116.3L52 114.8L55.5 116.3L57 119.8L55.5 123.4Z"/>
                <path d="M55.5 138.4L52 139.8L48.4 138.4L47 134.8L48.4 131.3L52 129.8L55.5 131.3L57 134.8L55.5 138.4Z"/>
            </g>
            <g fill={black}>
                <path d="M155 15.6H56.5V27.1H155V15.6Z"/>
                <path d="M154 149.2H57.5V168.8H154V149.2Z"/>
                <path d="M47 39.9L52 47.9L62 36.4L52 43.1L47 39.9Z"/>
                <path d="M47 54.9L52 62.9L62 51.4L52 58.1L47 54.9Z"/>
                <path d="M54 121.8L52 122.7L50 121.8L49.1 119.8L50 117.8L52 117L54 117.8L54.8 119.8L54 121.8Z"/>
                <path d="M178.2 90.5H33.2V88.5H178.2V90.5Z"/>
            </g>
            <path d="M127.7 155.4H83.8V162.6H127.7V155.4Z" fill={ltGreen}/>
        </svg>
    )
}
export function Hosting(props){
    return(
        <svg style={{placeSelf: 'center'}} height={props.height} role="img" viewBox="0 0 249 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120 2L92 8L69 24L55 49L48 48L27 52L10 68L2 94L9 118L26 134L48 139H192L221 132L240 111L247 84L241 58L220 36L192 30L176 32L161 16L142 6L120 2Z" fill={ltGreen} stroke={black} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M125 26L75 64V70H86V120H163V70H174V64L125 26ZM111 70H122V81H111V70ZM127 70H138V81H127V70ZM111 87H122V98H111V87ZM127 87H138V98H127V87Z" fill={black}/>
        </svg>
    )
}
export function Auth(props){
    return(
        <svg style={{placeSelf: 'center'}} height={props.height} role="img" viewBox="0 0 123 202" fill="none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 84V51L33 19L65 6L92 15L95 17L107 49V73L103 76L95 76L91 73V49L86 29L61 19L41 28L33 48V84L20 84Z" fill={black}/>
            <path d="M16 82V47L29 15L61 2L92 15L104 46L103 70H95L91 73L91 49L82 26L61 17L39 26L31 47V76L16 82Z" fill={mdGreen}/>
            <path d="M61 2L29 15L16 47V84C23 84 21 84 33 84V48L41 28L61 19L83 28L91 49V73L95 76L103 76L107 73V49L95 17L92 15L61 2Z" stroke={black} strokeWidth="3"/>
            <path d="M31 18L20 46L34 19L61 9L77 12L61 5L31 18Z" fill={ltGreen}/>
            <path d="M2 194L115 82L121 88V200H8L2 194Z" fill={mdGreen}/>
            <path d="M2 82H115L113 192L2 194V82Z" fill={ltGreen}/>
            <path d="M59 102L44 108L39 122L44 136L52 139L43 174H74L65 139L72 136L78 122L73 108L59 102Z" fill={black}/>
            <path d="M2 82V194L8 200H121V88L115 82H2Z" stroke={black} strokeWidth="3" />
        </svg>
    )
}
