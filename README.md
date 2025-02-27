# FeeJay - Ein moderner Webshop mit React und Node.js

## Inhaltsverzeichnis
1. [Projektbeschreibung](#projektbeschreibung)
2. [Technologien](#technologien)
3. [Features](#features)
4. [Installation](#installation)
5. [Projektstruktur](#projektstruktur)
6. [API-Endpunkte](#api-endpunkte)
7. [Zukünftige Verbesserungen](#zuk%C3%BCnftige-verbesserungen)

---

## Projektbeschreibung
FeeJay ist ein moderner Webshop, der mit React im Frontend und Node.js sowie Express im Backend entwickelt wurde. Das Ziel ist es, ein benutzerfreundliches Einkaufserlebnis zu bieten, mit einem dynamischen Warenkorbsystem und einer einfachen Checkout-Funktion.

## Technologien
- **Frontend:** React 
- **Backend:** Node.js mit Express

## Features
- Dynamischer Warenkorb
- Warenkorb-Daten über eine REST-API (POST, GET, DELETE, PATCH)
- Checkout-Seite mit Adressinformationen
- Zusammenfassung der Artikel und des Gesamtpreises
- Anzeige der Anzahl der Artikel im Warenkorb in der Navigationsleiste
- Einheitliche Navigation und Footer in separaten Komponenten

## Installation
### Voraussetzungen
Falls Node.js, npm, React oder Express noch nicht installiert sind, können sie wie folgt installiert werden:

1. **Node.js und npm installieren:**
   - [Node.js herunterladen](https://nodejs.org/)
   - Nach der Installation prüfen, ob Node.js und npm verfügbar sind:
     ```bash
     node -v
     npm -v
     ```

2. **React installieren:**
   ```bash
   npm install -g create-react-app
   ```

3. **Express im Backend installieren:**
   ```bash
   npm install express
   ```

### Repository klonen und starten
1. **Repository klonen:**
   ```bash
   git clone https://github.com/fynnxxn/FeeJay.git
   cd FeeJay
   ```

2. **Backend installieren & starten:**
   ```bash
   cd backend
   npm install
   node .
   ```

3. **Frontend installieren & starten:**
   ```bash
   cd frontend
   npm install
   npm start
   ```

## API-Endpunkte
### **Produkte API**
- **Alle Artikel abrufen:** `GET /products`
- **Artikel Detail:** `GET /products/:id`
### **Warenkorb API**
- **Checkout Daten abrufen:** `POST /checkout`
- **Artikel hinzufügen:** `POST /cart`
- **Warenkorb abrufen:** `GET /cart`
- **Artikelanzahl aktualisieren:** `PATCH /cart/:id`
- **Artikel entfernen:** `DELETE /cart/:id`
- **Warenkorb leeren:** `DELETE /cart`
### **Sonstige API**
- **Kontakt Daten:** `POST /contact`

## Zukünftige Verbesserungen
- Integration einer echten Zahlungs-Schnittstelle
- Benutzer-Authentifizierung (Login/Registrierung)

---

Viel Spaß mit FeeJay! Falls du Fragen oder Anregungen hast, erstelle ein Issue im Repository.

