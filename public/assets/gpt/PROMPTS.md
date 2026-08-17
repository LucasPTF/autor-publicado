# Prompts — Workshop Código que Vende

Gerador utilizado: GPT Image, modo integrado do Codex.

## Bloco de identidade

Use este bloco em todas as gerações:

```text
Create a new photorealistic editorial campaign photograph of the exact same adult man shown in the supplied identity references. Preserve his recognizable identity rigorously: overall face shape and proportions, eye shape and spacing, natural eye color, nose, lips, hairline, dark naturally curly hair, beard outline and density, skin tone, apparent age, natural skin texture, and observable body structure. The inputs depict one person and must be treated as identity references, never mixed into multiple people. One person only. Avoid identity drift, changed face shape, altered eyes, straight hair, changed hairline, missing curls, changed beard, younger or older appearance, plastic skin, beauty filters, glamour retouching, generic stock-photo appearance, duplicated person, malformed anatomy, text, logos, and watermarks.
```

## Hero desktop

```text
Use case: ads-marketing
Asset type: desktop landing-page hero.
Scene/backdrop: dark graphite studio with subtle refined texture; no office, computer, screens, code or interfaces.
Subject: exact same expert; graphite blazer over a plain black crew-neck T-shirt; calm, intelligent and confident expression; direct eye contact; leaning slightly forward; waist-up.
Style: premium photorealistic technology editorial photography with natural skin and tactile fabrics.
Composition: exact horizontal 16:9. Place the expert in the right third and reserve the left 50–55% as clean negative space for HTML headline and CTA. Keep safe space around the head and shoulders.
Lighting: soft controlled key light and restrained cool-blue rim light; deep but readable shadows.
Constraints: no embedded text, logos, readable code, UI, holograms, accessories, luxury symbols or watermark. Avoid cyberpunk, excessive neon, influencer poses and guru aesthetics.
```

## Hero mobile

```text
Use case: ads-marketing
Asset type: native mobile hero related to the approved desktop hero.
Create a new genuine vertical composition; do not crop the desktop image. Preserve the exact same expert, graphite blazer, black T-shirt, graphite studio, lighting direction and campaign color treatment.
Composition: exact vertical 4:5. Center the expert or place him slightly below center, framed from mid-torso upward, with clean headroom and safe margins. Page copy remains outside the image.
Constraints: no text, logo, code, screens, UI, accessories, luxury symbols or watermark. Avoid identity drift and automatic-looking desktop crops.
```

## Autoridade

```text
Use case: ads-marketing
Asset type: expert-authority editorial portrait.
Scene: elegant deep navy editorial studio, clean and softly graded.
Subject: exact same expert wearing a navy suit and crisp white open-collar shirt, no tie; mature, experienced and approachable expression.
Composition: native vertical 4:5 medium portrait. Place the expert slightly left of center and reserve clean negative space on the right for HTML copy.
Lighting: sophisticated controlled soft key light, restrained highlights and natural skin texture.
Constraints: no text, company logos, documents, certificates, interfaces, screens, watch, jewelry, luxury props or watermark.
```

## Tensão depois do deploy

```text
Use case: ads-marketing
Asset type: expert-tension editorial portrait.
Scene: dark minimal studio with no objects, screens or smoke.
Subject: exact same expert in a plain black T-shirt; thoughtful serious expression without aggression. One natural hand may rest lightly near the chin only when all visible fingers and anatomy are correct.
Composition: native vertical 4:5 close portrait with safe margins and a clearly readable face.
Lighting: soft cool blue on one side and contained muted red on the other, subtle and cinematic; technical-diagnosis mood, never cyberpunk.
Constraints: no readable code, screens, UI, text, logos, smoke, accessories or watermark. Avoid excessive neon and malformed hands.
```

## Método

```text
Use case: ads-marketing
Asset type: expert-method landscape portrait.
Scene: minimalist studio gradient from medium gray to graphite.
Subject: exact same expert in a medium-gray suit and open-collar white shirt; torso slightly angled; gaze subtly directed toward the empty space on the right.
Composition: exact horizontal 16:9. Place the expert entirely in the left third and reserve the right 55–60% as clean empty space for a real HTML/SVG diagram.
Lighting: precise architectural soft light with a neutral professional mood.
Constraints: no generated diagram, hologram, floating elements, words, code, UI, screens, logos, accessories or watermark.
```

## CTA final desktop

```text
Use case: ads-marketing
Asset type: final CTA desktop portrait.
Scene: deep dark seamless studio.
Subject: exact same expert wearing a minimalist black turtleneck or black knit top; direct gaze; calm conviction; leaning slightly forward; forearms may appear naturally.
Style: refined black-and-white editorial photography with high tonal range, honest skin texture and very subtle analog film grain.
Composition: exact horizontal 16:9. Place the expert in the right half and reserve large clean dark negative space on the left for HTML headline and CTA.
Constraints: true monochrome; no text, logos, code, screens, interfaces, accessories, fashion props or watermark.
```

## CTA final mobile

```text
Use case: ads-marketing
Asset type: final CTA mobile portrait.
Create a new native vertical black-and-white composition related to the desktop CTA; do not merely crop it.
Subject: exact same expert in a black turtleneck or black knit top; direct gaze; calm conviction; authentic skin texture.
Composition: exact vertical 4:5, centered, with safe space around the head and shoulders and nothing important near the edges.
Lighting: sculpted soft monochrome light, luminous face, rich blacks, controlled highlights and subtle film grain.
Constraints: no text, logos, code, screens, interfaces, accessories, fashion props or watermark.
```

## Sequência narrativa — trava de continuidade

Use STORY-01 como matriz. Em cada cena posterior, envie a cena imediatamente anterior como primeira referência e repita:

```text
Keep exactly the same expert identity, face, apparent age, curls, beard, skin, graphite blazer, black T-shirt, seated posture, slight forward lean, approximate hand placement, dark graphite studio, camera position, eye-level height, 50mm lens look, subject distance, exact 16:9 framing, right-third placement, front-left key light, cool camera-right rim light, color grade and depth of field. Change only the requested narrative state. No text, letters, numbers, readable code, screens, UI, logos, accessories or watermark. Avoid identity drift, camera or outfit changes, duplicated person, extra limbs and malformed anatomy.
```

### STORY-01 — Construir

```text
Create the visual matrix for a five-frame continuous scrollytelling sequence. The exact same expert is seated in the right third, wearing a graphite blazer and black T-shirt. A small number of clean, unlabelled matte-graphite technical modules and thin connections are organized around him, suggesting a technically completed product system. He looks secure and concentrated. Preserve broad negative space on the left for the external HTML line “Você sabe construir.” Do not render the text. Nothing indicates failure.
```

### STORY-02 — Deploy

```text
Derive directly from STORY-01. Keep every photographic and identity invariant unchanged. Change only one restrained abstract node or module so it emits a subtle activation glow, indicating that the product was published. The expert observes the result with controlled attention. No celebration. Preserve space for the external HTML line “Produto pronto. Página no ar.” Do not render text or the word “deploy”.
```

### STORY-03 — Silêncio

```text
Derive directly from STORY-02, using STORY-01 as an additional continuity reference. Keep all photographic and identity invariants unchanged. Turn the activation glow off. Leave the technical elements present but inactive and darker, creating more empty space and a feeling of waiting. Make the expert subtly thoughtful without moving him substantially. Preserve space for the external HTML line “E o silêncio.” Do not render text, sales numbers, graphs or notifications.
```

### STORY-04 — Refactor

```text
Derive directly from STORY-03. Keep all photographic and identity invariants unchanged. Add abstract graphite layers, connections and nested modules around the existing system. It should look technically more sophisticated and over-engineered, but not clearer or chaotic. The expert subtly studies the excess complexity. Preserve space for the external HTML line “Aí você volta pro código.” Do not render text, code or interfaces.
```

### STORY-05 — Oferta

```text
Derive directly from STORY-04 while using the earlier frames as continuity references. Keep all photographic and identity invariants unchanged. Recede the many technical layers into exactly four clean, matte-graphite abstract modules connected to one small central focal node. The expert shows calm clarity, not celebration. Preserve regions for later HTML labels “Promessa”, “Público”, “Preço”, “Experiência” and “Oferta”, but render none of those words. The meaning is clarity and organization, never wealth or financial success.
```
