import React from 'react';

const WizardGif = () => {
    const gifUrl = 'https://www.wizard.financial/static/media/wizaart-img.56787174.gif';

    return (
        <div style={{ textAlign: 'center', marginBottom: '50px', marginTop: '10px', backgroundColor: '#FFFFF' }}>
            <img
                src={gifUrl}
                alt="Wizard"
                style={{
                    width: '742px',
                    height: '611px',
                    aspectRatio: 'auto 742/611'
                }}
            />
        </div>
    );
};

export default WizardGif;